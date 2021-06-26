import { Request, Response, Router } from "express";

const routes = Router()

routes.get("", (req: Request, res: Response) => {
    res.json({ version: "Meetup doc v1" })
});

export default routes;
