import { Router, Request, Response } from 'express';
import auth from './auth.routes';

const routes = Router();

routes.get('', (request: Request, response: Response) => {
    response.json({ info: 'Proyecto Dev Tools Node v1' })
});

routes.use("/auth", auth);

export default routes;
