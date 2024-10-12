import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status - :response-time ms - :res[content-length]"));

export default app;
