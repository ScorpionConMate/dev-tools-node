import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { MeetModel } from './Meet.models';
import { UserModel } from './User.models';

@Entity('meetInscription')
export class MeetInscriptionModel extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserModel, (user) => user.id)
    user: UserModel;

    @ManyToOne(() => MeetModel, (meet) => meet.id)
    meet: MeetModel;

    @Column({ type: 'boolean' })
    isSuscribed: boolean;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    updatedAt: Date;
}
