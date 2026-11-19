import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import cookieSession from "cookie-session";
import { connectDB } from "./config/db.config";
import { log, notFound, errorHandler } from "./middlewares";
import API from "./api"
import { generateResponse, logger } from "./utils/helpers";
import { Server } from "socket.io";
import { initializeSocketIO } from "./socket";
import packageJson from "../package.json";
import path from "path";
dotenv.config();

// initialize express app
const app: Application = express();

// connect to database
connectDB();

const { router: APP_ROUTER } = new API();
const uploadsPath = path.join(__dirname, "..", "uploads");

// initialize http server
const httpServer = createServer(app);

// initialize socket.io
const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
        origin: "*",
        credentials: true,
    },
});

initializeSocketIO(io);

// set up middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY as string],
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
}));

app.use(cors({ origin: "*", credentials: true }));

app.use("/uploads", express.static(uploadsPath));

app.get('/', (req: Request, res: Response) => {
    generateResponse(null, `${packageJson?.description} v${packageJson?.version}`, res);
});

app.use(log);
app.use(APP_ROUTER);
app.use(notFound);
app.use(errorHandler);

// set port
const PORT: Number = +(process.env.PORT as string) || 5000;

// start the server
httpServer.listen(PORT, () => {
    logger.info(`Application is running on: http://localhost:${PORT}`, 'Bootstrap');
});
