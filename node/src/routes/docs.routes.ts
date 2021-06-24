import { Router } from "express";

const routes = Router()

routes
    .get( () => {
        console.log("La idea es devolver abrir una pesta;a con la documentacion completa de la API")
    })

export default routes;