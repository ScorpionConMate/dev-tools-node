const dotenv = require("dotenv");
dotenv.config();

const config = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities: ["dist/src/models/*.js"],
    migrations: ["dist/src/migrations/**/*.js"],
    subscribers: ["dist/src/subscribers/**/*.js"],
    cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "src/models"
    },
    extra: {
        connectTimeout: 3600000,
    },
    cache: true
};
if (process.env.TS_NODE) {
    config.entities = ["src/models/**/*.ts"];
    config.migrations = ["src/migrations/**/*.ts"]
    config.subscribers = ["src/subscribers/*.ts"]
}
module.exports = config;
