import { Router, Request, Response } from 'express';
import auth from './auth.routes';
import docs from './docs.routes';

const routes = Router();

// INFO Routes
routes.get('/info', (req: Request, res: Response) => {
    res.json({ info: "Proyecto realizado por la faccion de NodeJS para el grupo de Dev-Tools-Node"})
})

// DOCUMENTATION Routes
routes.use('/docs', docs)

// AUTHENTICATION Routes
routes.use('/auth', auth)


export default routes;