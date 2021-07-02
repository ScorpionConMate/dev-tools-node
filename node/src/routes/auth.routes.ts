import { Router } from 'express';

const route = Router();

route.post('/login', AuthController.login);

export default route;
