import { UserModel } from '../models/User.models';

export interface MeetInfoInterface {
    id: string;
    owner: UserModel;
    appoinmentDate: Date;
    isAvailable: boolean;
}
