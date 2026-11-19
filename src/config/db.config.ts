import mongoose from "mongoose";
import { logger } from "../utils/helpers";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL as string);
        logger.info(`Database connected → ${conn.connection.name}`, 'Mongoose');

    } catch (error: any) {
        logger.error(`Database connection error: ${error.message}`, 'Mongoose', { stack: error.stack });
        process.exit(1);
    }
};
