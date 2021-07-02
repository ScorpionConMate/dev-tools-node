import { Request, Response } from 'express';
import { ResponseGeneric } from '../interfaces/Response.interface';

import { MeetModel } from '../models/Meet.models';

export class MeetController {
    static async findOne(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const meet = await MeetModel.findOneOrFail(id);

            res.json(
                new ResponseGeneric({
                    status: 200,
                    success: true,
                    data: { meet },
                })
            );
        } catch (error) {
            res.status(404).json(
                new ResponseGeneric({
                    status: 404,
                    success: false,
                    error: { error },
                })
            );
        }
    }

    static async find(req: Request, res: Response): Promise<void> {
        try {
            const meets = await MeetModel.find();

            res.json(
                new ResponseGeneric({
                    status: 200,
                    success: true,
                    data: { meets },
                })
            );
        } catch (error) {
            res.status(404).json(
                new ResponseGeneric({
                    status: 404,
                    success: false,
                    error: { error },
                })
            );
        }
    }
}
