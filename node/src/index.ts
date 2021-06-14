import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import routes from './routes/routes';
import morgan from "morgan";
import helmet from "helmet"
// Try establish database connection
createConnection().then(async connection => {

    // Increase max listener to prevent memory limit.
    process.setMaxListeners(50);

    // Init express app
    const app = express();
    app.use(helmet())
    app.use(express.json());
    app.use(morgan("tiny"));


    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(cors());


    // Register all application routes
    app.use("/api/", routes);

    app.listen(process.env.APP_PORT, () => {
        console.log(`⚡️[server]: Server is running at ${process.env.APP_URL}`);
    });
}).catch(err => console.log(err));
