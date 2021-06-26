import { Router, Request, Response } from 'express';
import docs from './docs.routes';
import meet from "./meet.routes";
const routes = Router();

// INFO Routes
routes.get('/info', (req: Request, res: Response) => {
    res.json({ info: "Proyecto realizado por la faccion de NodeJS para el grupo de Dev-Tools-Node" })
})

// DOCUMENTATION Routes
routes.use('/docs', docs);

// Meet Routes
routes.use("/meet", meet);

export default routes;
