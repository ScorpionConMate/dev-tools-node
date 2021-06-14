import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, DeleteDateColumn } from "typeorm";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";

enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    nombre: string;

    @Column({ type: 'varchar' })
    apellido: string;

    @Column({ type: 'varchar', default: Roles.USER })
    role: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @DeleteDateColumn({ select: false })
    deletedAt?: Date;

    hashPassword() {
        const salt = genSaltSync();
        this.password = hashSync(this.password, salt);
    }

    validatePassword(password) {
        return compareSync(password, this.password)
    }

    get fullName() {
        return `${this.apellido}, ${this.nombre}`;
    }

    get userInfo() {
        return {
            id: this.id,
            email: this.email,
            nombre: this.nombre,
            apellido: this.apellido,
            role: this.role
        }
    }

    get isAdmin() {
        return this.role == Roles.ADMIN;
    }

    get userMeetup() {
        return {
            email: this.email,
            nombre: this.nombre,
            apellido: this.apellido,
        }
    }

}
