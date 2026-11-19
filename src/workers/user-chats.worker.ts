import { Types } from "mongoose";
import { ChatRepository, UserRepository } from "../repositories";
import { EventEmitterDispatcher } from "../utils/emitter";
import { getMongoId, logger } from "../utils/helpers";
import { ROLE } from "../utils/constants";

type ChatCreationPayload = {
    userId: string | Types.ObjectId;
};

const USER_CHAT_CREATION_EVENT = 'user:create-chats';
const chatWorkerEmitter = new EventEmitterDispatcher();

const runChatCreationJob = async (userId: string | Types.ObjectId) => {
    const normalizedUserId = userId instanceof Types.ObjectId ? userId.toString() : `${userId}`;
    const newUserObjectId = getMongoId(normalizedUserId);
    if (!newUserObjectId) return;

    const existingUsers = await UserRepository.findAll({
        $and: [
            { _id: { $ne: newUserObjectId } },
            { isDeleted: false },
            { role: { $ne: ROLE.ADMIN } }
        ],
    }).select('_id').lean();

    for (const existingUser of existingUsers) {
        const existingUserId = existingUser?._id ? existingUser._id.toString() : undefined;
        if (!existingUserId || existingUserId === normalizedUserId) continue;

        const existingUserObjectId = getMongoId(existingUserId);
        if (!existingUserObjectId) continue;

        const sortedParticipantIds = [
            newUserObjectId.toString(),
            existingUserObjectId.toString()
        ].sort();

        const participants = sortedParticipantIds
            .map((id) => getMongoId(id))
            .filter((id): id is Types.ObjectId => Boolean(id));

        if (participants.length !== 2) continue;

        const existingChat = await ChatRepository.get({
            $and: [
                { participants: { $size: participants.length } },
                { participants: { $all: participants } },
            ],
        });

        if (!existingChat) {
            await ChatRepository.create({ participants });
        }
    }
};

chatWorkerEmitter.on(USER_CHAT_CREATION_EVENT, async ({ userId }: ChatCreationPayload) => {
    if (!userId) return;
    try {
        await runChatCreationJob(userId);
        logger.info('Successfully created chats for user', 'UserChatWorker');
    } catch (error) {
        logger.error('Failed to create chats for user', 'UserChatWorker', error);
    }
});

export const enqueueUserChatCreation = (userId: string | Types.ObjectId) => {
    if (!userId) return;
    setImmediate(() => {
        chatWorkerEmitter.dispatch(USER_CHAT_CREATION_EVENT, { userId });
    });
};
