import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, DeleteDateColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { Meet } from "./Meet.models";

enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}

@Entity('user')
export class User extends BaseEntity {

    // CAMPOS:
    // id
    // email
    // user name
    // password
    // name
    // last name
    // role
    // meetsOwned
    // meets
    // createdAt
    // deletedAt (soft delete)

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar', unique: true})
    userName: string;
    
    @Column({ type: 'varchar', length: 255 })
    password: string;
    
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    lastName: string;

    @Column({ type: 'varchar', default: Roles.USER })
    role: string;

    @OneToMany(type => Meet, meet => meet.id) 
    meetsOwned: Meet[];

    @ManyToMany(type => Meet, meet => meet.id)
    @JoinTable()
    meets: Meet[];

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
        return `${this.lastName}, ${this.name}`;
    }

    get userInfo() {
        return {
            id: this.id,
            email: this.email,
            nombre: this.name,
            apellido: this.lastName,
            role: this.role
        }
    }

    get isAdmin() {
        return this.role == Roles.ADMIN;
    }

    get userMeetup() {
        return {
            email: this.email,
            nombre: this.name,
            apellido: this.lastName,
        }
    }

}
