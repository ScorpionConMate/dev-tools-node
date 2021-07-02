import { Roles } from '../models/User.models';

export interface UserInfoInterface {
    id: string;
    email: string;
    name: string;
    lastName: string;
    role: Roles;
}
