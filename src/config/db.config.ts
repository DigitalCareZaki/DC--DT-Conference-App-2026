import mongoose from "mongoose";
import { hashPassword, logger } from "../utils/helpers";
import { UserRepository } from "../repositories";
import { ROLE } from "../utils/constants";
import { runChatCreationJob } from "../workers/user-chats.worker";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL as string);
        logger.info(`Database connected → ${conn.connection.name}`, 'Mongoose');
        // console.log(await createHashForPassword("Build@123"));
        // createAdminIfNotExists();
        // createExhibitorIfNotExists();
        // runChatCreationForAllUsers();
    } catch (error: any) {
        logger.error(`Database connection error: ${error.message}`, 'Mongoose', { stack: error.stack });
        process.exit(1);
    }
};

// const createHashForPassword = async (password: string) => {
//     const hash = await hashPassword(password);
//     return hash;
// }

// export const runChatCreationForAllUsers = async () => {
//     try {
//         const users = await UserRepository.findAll({
//             isDeleted: false,
//             role: { $ne: ROLE.ADMIN },
//         }).select('_id').lean();

//         logger.info(`Starting chat creation for ${users.length} users`, 'ChatCreation');

//         for (const user of users) {
//             if (!user?._id) continue;
//             try {
//                 await runChatCreationJob(user._id);
//                 logger.info(`Chat creation completed for user: ${user._id}`, 'ChatCreation');
//             } catch (error) {
//                 logger.error(`Chat creation failed for user: ${user._id}`, 'ChatCreation', error);
//             }
//         }

//         logger.info('Chat creation completed for all users', 'ChatCreation');
//     } catch (error: any) {
//         logger.error(`Failed to run chat creation for all users: ${error.message}`, 'ChatCreation', { stack: error.stack });
//     }
// };

// const createAdminIfNotExists = async () => {
//     try {
//         const admin = await UserRepository.get({ role: ROLE.ADMIN });
//         if (!admin) {
//             await UserRepository.create({
//                 name: 'Build Asia Admin',
//                 email: 'build-asia-admin@gmail.com',
//                 password: "abc12345",
//                 role: ROLE.ADMIN,
//                 isVerified: true,
//             });
//             logger.info('Admin created', 'User');
//         }
//     } catch (error: any) {
//         logger.error(`Admin creation error: ${error.message}`, 'User', { stack: error.stack });
//     }
// };

// const createExhibitorIfNotExists = async () => {
//     try {
//         const exhibitor = await UserRepository.get({ role: ROLE.EXHIBITOR });
//         if (!exhibitor) {
//             await UserRepository.create({
//                 name: 'Build Asia Exhibitor',
//                 email: 'build-asia-exhibitor@gmail.com',
//                 password: "abc12345",
//                 role: ROLE.EXHIBITOR,
//                 isVerified: true,
//             });
//             logger.info('Exhibitor created', 'User');
//         }
//     } catch (error: any) {
//         logger.error(`Exhibitor creation error: ${error.message}`, 'User', { stack: error.stack });
//     }
// };