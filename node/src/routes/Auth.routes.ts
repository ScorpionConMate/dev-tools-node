import { Request, Response, Router } from "express";
import { UsersController } from "../controllers/Users.controller"
import { AuthController } from "../controllers/Auth.controller";
import { ValidateFields } from '../middlewares/ValidateFields.middleware';
import { validateJwt } from '../middlewares/ValidateJwt.middleware';
import { LoginSchema, RegisterSchema } from '../validators/ValidationSchemas';

const router = Router();

//Login route
router.post("/login", [...LoginSchema, ValidateFields], async (req: Request, res: Response) => {
    try {
        const controller = new AuthController();
        const response = await controller.login(req.body);
        return res.status(response['statusCode']).json(response);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Ocurrio un error, contacte con el Administrador del sistema' });
    }
});

//Change my password
router.post("/register", [...RegisterSchema, ValidateFields], async (req: Request, res: Response) => {
    try {
        const controller = new AuthController();
        const response = await controller.register(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Ocurrio un error, contacte con el Administrador del sistema' });
    }
});

router.post("/renew", validateJwt, async (req: Request, res: Response) => {
    try {
        const controller = new AuthController();
        const response = await controller.revalidateToken(req);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Ocurrio un error, contacte con el Administrador del sistema' });
    }
});

export default router;


router.post("/users", async (req: Request, res: Response) => {
    try {
        const controller = new UsersController();
        const response = await controller.getUsers();
        return res.status(response['statusCode']).json(response);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Ocurrio un error, contacte con el Administrador del sistema' });
    }
});
