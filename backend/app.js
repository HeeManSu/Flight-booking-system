import express from "express";
import { config } from "dotenv";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";

config({
    path: "./config/config.env"
});

const app = express();








export default app;

app.use(errorHandlerMiddleware);