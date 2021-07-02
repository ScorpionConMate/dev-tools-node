import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, DeleteDateColumn } from 'typeorm';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { UserInfoInterface } from '../interfaces/UserInfo.interface';

export enum Roles {
    ADMIN = 'admin',
    USER = 'user',
}

@Entity('user')
export class UserModel extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar', unique: true })
    userName: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    lastName: string;

    @Column({ type: 'varchar', default: Roles.USER })
    role: Roles;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    @DeleteDateColumn({ select: false })
    deletedAt?: Date;

    hashPassword(): void {
        const salt = genSaltSync();
        this.password = hashSync(this.password, salt);
    }

    validatePassword(password: string): boolean {
        return compareSync(password, this.password);
    }

    get fullName(): string {
        return `${this.lastName}, ${this.name}`;
    }

    get userInfo(): UserInfoInterface {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            lastName: this.lastName,
            role: this.role,
        };
    }

    get isAdmin(): boolean {
        return this.role == Roles.ADMIN;
    }
}
