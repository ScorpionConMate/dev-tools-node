import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { MeetInfoInterface } from '../interfaces/Meet.interface';
import { UserModel } from './User.models';

@Entity('meet')
export class MeetModel extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserModel, (user) => user.id)
    owner: UserModel;

    @Column({ type: 'date' })
    appoinmentDate: Date;

    @Column({ type: 'bool', default: true })
    isAvailable: boolean;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    get meetInfo(): MeetInfoInterface {
        return {
            id: this.id,
            owner: this.owner,
            appoinmentDate: this.appoinmentDate,
            isAvailable: this.isAvailable,
        };
    }
}
