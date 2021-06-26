import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, ManyToOne, ManyToMany } from "typeorm";
import { UserModel } from "./User.models";

@Entity('meet')
export class MeetModel extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(type => UserModel, user => user.id)
    owner: UserModel;

    @Column({ type: 'date' })
    appoinmentDate: Date;

    @Column({ type: "bool", default: true })
    isAvailable: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    get meetInfo() {
        return {
            id: this.id,
            owner: this.owner,
            appoinmentDate: this.appoinmentDate
        }
    }
}
