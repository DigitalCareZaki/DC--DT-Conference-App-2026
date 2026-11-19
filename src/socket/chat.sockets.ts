// import { Server, Socket } from "socket.io";
// import {
//     CHAT_SOCKET_EMITTERS as EMIT,
//     CHAT_SOCKET_LISTENERS as ON,
// } from "../utils/constants";
// import { getMongoId } from "../utils/helpers";
// // import { sendChatEmail } from "./helpers/chatEmailHandler";

// /* ─────────────────────────────  Types & helpers  ───────────────────────────── */

// enum ChatError {
//     NEED_PRODUCT = "Product ID is required",
//     NEED_PARTICIPANTS = "Participants array is required",
//     NEED_CHAT_ID = "Chat ID not provided",
//     NOT_PARTICIPANT = "You are not a participant in this chat",
//     NOT_AUTH_ADD_USER = "You are not authorized to add users to this chat",
//     USER_NOT_FOUND = "User to add not found",
//     BUSINESS_MISMATCH = "User must belong to the same business",
//     ALREADY_PARTICIPANT = "User is already a participant in this chat",
// }

// type Listener<T = any> = (payload: T) => Promise<void>;

// /** Emit a socket error and throw so the wrapper catches it for logging */
// const assert = (condition: any, sock: Socket, err: ChatError) => {
//     if (!condition) {
//         sock.emit(EMIT.ERROR, err);
//         throw new Error(err);
//     }
// };

// /** Get an id-safe room name (string) for a chat */
// const buildRoomId = (chatId: string) => chatId.toString();

// /** Merge participants + current user, dedupe, stringify */
// const uniqueParticipants = (participants: readonly string[], currentUserId: string): string[] => [...new Set([currentUserId, ...participants])];


// /* ─────────────────────────────  Main listener set-up  ──────────────────────── */

// export const chatSocketsListeners = (socket: Socket, io: Server<any, any, any, Socket>) => {
//     /* ─────────────  CREATE_CHAT  ───────────── */
//     socket.on(
//         ON.CREATE_CHAT,
//         wrap(async ({ participants, product }) => {
//             // assert(product, socket, ChatError.NEED_PRODUCT);
//             // assert(Array.isArray(participants) && participants.length, socket, ChatError.NEED_PARTICIPANTS);

//             // const allParticipants = uniqueParticipants(participants, socket.user._id.toString());
//             // assert(allParticipants.length >= 2, socket, ChatError.NEED_PARTICIPANTS);

//             // const participantIds = allParticipants.map(getMongoId);

//             // const existing = await getChat({
//             //     product: getMongoId(product),
//             //     participants: { $all: participantIds },
//             // });

//             // if (existing) {
//             //     socket.emit(EMIT.CHAT_EXISTS, existing);
//             //     return;
//             // }

//             // const chatNo = await generateChatNo();

//             // const chat = await createChat({
//             //     product: getMongoId(product),
//             //     participants: participantIds,
//             //     chatNo,
//             // });

//             // const room = buildRoomId(chat._id.toString());

//             // socket.join(room);
//             // socket.emit(EMIT.CHAT_CREATED, chat); // notify creator

//             // participantIds
//             //     .filter((id) => id.toString() !== socket.user._id.toString())
//             //     .forEach((id) => io.to(id.toString()).emit(EMIT.NEW_CHAT, chat));
//         })
//     );

//     /* ─────────────  JOIN_CHAT  ───────────── */
//     socket.on(
//         ON.JOIN_CHAT,
//         wrap(async ({ chat }: { chat: string }) => {
//             // assert(chat, socket, ChatError.NEED_CHAT_ID);

//             // const found = await getChat({ _id: chat, participants: socket.user._id });
//             // assert(found, socket, ChatError.NOT_PARTICIPANT);

//             // socket.join(buildRoomId(chat));
//             // socket.emit(EMIT.CHAT_JOINED, found);
//         }),
//     );

//     /* ─────────────  NEW_MESSAGE  ───────────── */
//     socket.on(
//         ON.NEW_MESSAGE,
//         wrap(async ({ chat, message, attachments }: { chat: string; message?: string; attachments?: any[] }) => {
//             // assert(chat, socket, ChatError.NEED_CHAT_ID);

//             // const chatObj = await getChat({ _id: chat });
//             // if (!chatObj) return;

//             // assert(chatObj.participants.includes(socket.user._id), socket, ChatError.NOT_PARTICIPANT);

//             // const newMsg = await createMessage({
//             //     chat,
//             //     sender: socket.user._id,
//             //     message,
//             //     attachments,
//             //     readBy: [socket.user._id],
//             //     deliveredTo: [socket.user._id],
//             // });

//             // await chatObj.updateOne({ lastMessage: newMsg._id });
//             // const populatedChat = await getChat({ _id: chat })
//             //     .populate([
//             //         { path: "participants", select: "name email business profileImage", populate: { path: "business", select: "name" } },
//             //         { path: "lastMessage", populate: { path: "sender", select: "name email business profileImage" } },
//             //         {
//             //             path: "product", select: "refId bids",
//             //             populate: { path: "bids", }
//             //         }
//             //     ]);

//             // // Emit socket events
//             // io.to(buildRoomId(chatObj._id.toString())).emit(ON.NEW_MESSAGE, await newMsg.populate("sender", "name email business"));
//             // io.to(chatObj.participants.map(id => id.toString())).emit(ON.UPDATED_CHAT, populatedChat);

//             // // Send email notifications
//             // await sendChatEmail({
//             //     chatId: chatObj._id.toString(),
//             //     productId: chatObj.product.toString(),
//             //     senderId: socket.user._id,
//             //     message: newMsg.message || "",
//             //     participantIds: chatObj.participants.map(id => id.toString()),
//             // });
//         }),
//     );

//     /* ─────────────  PARTICIPANT_ADDED  ───────────── */
//     socket.on(
//         ON.PARTICIPANT_ADDED,
//         wrap(async ({ chat, user }: { chat: string; user: string }) => {
//             // assert(chat, socket, ChatError.NEED_CHAT_ID);
//             // assert(user, socket, ChatError.USER_NOT_FOUND);

//             // const chatObj = await getChat({ _id: chat });
//             // if (!chatObj) return;

//             // assert(chatObj.participants.includes(socket.user._id), socket, ChatError.NOT_AUTH_ADD_USER);

//             // const userToAdd = await getUserByQuery({ _id: user });
//             // if (!userToAdd) return;
//             // assert(userToAdd, socket, ChatError.USER_NOT_FOUND);
//             // assert(
//             //     userToAdd.business?.toString() === socket.user.business.toString(),
//             //     socket,
//             //     ChatError.BUSINESS_MISMATCH,
//             // );
//             // assert(!chatObj.participants.includes(user), socket, ChatError.ALREADY_PARTICIPANT);

//             // await chatObj.updateOne({ $push: { participants: user } });

//             // const populatedChat = await chatObj.populate([
//             //     { path: "participants", select: "name email business profileImage", populate: { path: "business", select: "name type" } },
//             //     { path: "lastMessage", populate: { path: "sender", select: "name email business profileImage" } },
//             // ]);

//             // const room = buildRoomId(chatObj._id.toString());
//             // io.to(room).emit(EMIT.ADD_PARTICIPANT, { chat: populatedChat, user: userToAdd });
//             // io.to(user).emit(EMIT.ADD_PARTICIPANT, { chat: populatedChat, user: userToAdd });
//         }),
//     );

//     /* ─────────────  MESSAGE_DELIVERED  ───────────── */
//     socket.on(
//         ON.MESSAGE_DELIVERED,
//         wrap(async ({ chat, messageId }: { chat: string; messageId: string }) => {
//             // if (!chat || !messageId) return;

//             // const chatObj = await getChat({ _id: chat, participants: socket.user._id });
//             // if (!chatObj) return;

//             // if (await markDelivered({ messageId, chatId: chat, userId: socket.user._id })) {
//             //     const msg = await getMessageById(messageId, "sender");
//             //     msg && io.to(msg.sender.toString()).emit(EMIT.MESSAGE_DELIVERED, { chat, messageId });
//             // }
//         }),
//     );
// };

import { Server, Socket } from "socket.io";
import {
    CHAT_SOCKET_EMITTERS as EMIT,
    CHAT_SOCKET_LISTENERS as ON,
    CHAT_ERROR
} from "../utils/constants";
import { getMongoId } from "../utils/helpers";
import { HttpError } from "../utils/HttpError";
import { createChat, createMessage, getChatById, getUserChats, readMessages } from "../controllers"

const assert = (condition: any, sock: Socket, err: CHAT_ERROR) => {
    if (!condition) {
        sock.emit(EMIT.ERROR, err);
        throw new HttpError(400, err);
    }
};

const buildRoomId = (chatId: string) => chatId.toString();

type Listener<T = any> = (payload: T) => Promise<void>;

const wrap = (fn: Listener): Listener => async (payload) => {
    try {
        await fn(payload);
    } catch (err) {
        console.error("[socket] chat error:", err);
    }
};

export const chatSocketsListeners = (socket: Socket, io: Server<any, any, any, Socket>) => {
    const emitOrderedChatsForUsers = async (participants: any[]): Promise<void> => {
        if (!Array.isArray(participants) || !io) return;
        const uniqueUserIds = Array.from(
            new Set(
                participants
                    .filter(Boolean)
                    .map((id) => getMongoId(id).toString())
            )
        );

        await Promise.all(
            uniqueUserIds.map(async (userId) => {
                const chats = await getUserChats(userId);
                io.to(buildRoomId(userId)).emit(EMIT.CHAT_LIST_UPDATED, { chats });
            })
        );
    };

    socket.on(
        ON.GET_CHATS,
        wrap(async () => {
            await emitOrderedChatsForUsers([socket.userId]);
        })
    );

    socket.on(
        ON.CREATE_CHAT,
        wrap(async (data: any) => {
            const { receiverId } = data;
            assert(getMongoId(receiverId), socket, CHAT_ERROR.NEED_RECEIVER_ID);
            assert(receiverId !== socket.userId, socket, CHAT_ERROR.CANNOT_ADD_SELF);
            const result: any = await createChat(
                { participants: [getMongoId(socket.userId), getMongoId(receiverId)] },
            );
            const chat = result.chat ?? result;
            const messageHistory = result.messageHistory ?? [];
            socket.join(buildRoomId(String(chat._id)));
            io.to(buildRoomId(String(chat._id))).emit(EMIT.CHAT_CREATED, { chat, messageHistory });
            await emitOrderedChatsForUsers(chat?.participants || [socket.userId, receiverId]);
        })
    );


    socket.on(
        ON.SEND_MESSAGE,
        wrap(async (data: any) => {
            const { chatId, type, message, attachments } = data;
            assert(chatId, socket, CHAT_ERROR.NEED_CHAT_ID);
            const chat = await getChatById(chatId);
            assert(chat, socket, CHAT_ERROR.CHAT_NOT_FOUND);
            const userId = getMongoId(socket.userId);
            const isParticipant = (chat?.participants || []).some((p: any) => p.toString() === userId.toString());
            assert(isParticipant, socket, CHAT_ERROR.NOT_PARTICIPANT);
            assert(!chat?.isBlocked, socket, CHAT_ERROR.CHAT_BLOCKED);
            const newMessage = await createMessage({ chatId, senderId: socket.userId, message, type, attachments });
            io.to(buildRoomId(chatId)).emit(EMIT.NEW_MESSAGE, { message: newMessage });
            await emitOrderedChatsForUsers(chat?.participants || []);
        })
    );

    socket.on(ON.READ_MESSAGES, wrap(async (data: any) => {
        const { chatId } = data;
        assert(chatId, socket, CHAT_ERROR.NEED_CHAT_ID);
        const chat = await getChatById(chatId);
        assert(chat, socket, CHAT_ERROR.CHAT_NOT_FOUND);
        const userId = getMongoId(socket.userId);
        const isParticipant = (chat?.participants || []).some((p: any) => p.toString() === userId.toString());
        assert(isParticipant, socket, CHAT_ERROR.NOT_PARTICIPANT);
        const result = await readMessages(chatId, socket.userId);
        io.to(buildRoomId(chatId)).emit(EMIT.MESSAGES_READ, result);
        await emitOrderedChatsForUsers(chat?.participants || []);
    }));

    socket.on('disconnect', () => {
        console.info('[socket] Disconnected:', socket.userId);
    });
};
