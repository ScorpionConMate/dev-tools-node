import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, DeleteDateColumn, OneToOne, ManyToOne, JoinColumn, ColumnTypeUndefinedError, ManyToMany, JoinTable, Timestamp } from "typeorm";
import { User } from "./User.models";

@Entity('meet')
export class Meet {

    // CAMPOS:
    // id
    // owner
    // assistants
    // time
    // isAvailable
    // createdAt

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    owner: User;

    @ManyToMany( type => User, user => user.id)
    assistants: User[];

    @Column()
    time: Timestamp;

    @Column()
    isAvailable: Boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    get meetInfo() {
        return {
            id: this.id,
            owner: this.owner,
            time: this.time
        }
    }

}