import { Request, Response } from 'express';
import { UserModel } from '../models/User.models';

export class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        const { username, password }: { username: string; password: string } = req.body;
        res.json({ success: true });
        return;
    }
}
