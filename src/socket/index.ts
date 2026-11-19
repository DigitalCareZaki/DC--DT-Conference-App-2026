import { chatSocketsListeners } from "./chat.sockets";
import { Server, Socket } from 'socket.io';
import { decodeJwtToken, logger } from '../utils/helpers';
import { IRequestedUser } from '../utils/interfaces';
import { getUserChats } from "../controllers";
import { IChat } from "../schema/chat.schema";
import { CHAT_SOCKET_EMITTERS as EMIT } from "../utils/constants";

/* -------------------------------------------------------------------------- */
/*                               Singleton – io                               */
/* -------------------------------------------------------------------------- */

let io: Server<any, any, any, Socket> | null = null;

/**
 * Bind the Socket.IO server instance once at bootstrap time.
 */
export const initializeSocketIO = (serverInstance: Server<any, any, any, Socket>): void => {
    if (io) throw new Error('Socket.IO already initialised');
    io = serverInstance;
    logger.info('Initialized socket.io', 'Socket');

    io.on('connection', handleConnection);
};

/**
 * Emit an event to one or many rooms. Throws if called before initialisation.
 */
export const emitSocketEvent = (rooms: string | string[], event: string, payload: unknown): void => {
    if (!io) throw new Error('Socket.IO instance not initialised');

    console.log('emitSocketEvent >>>>>>>>>> ', { rooms, event });

    io.in(rooms).emit(event, payload);
};

/* -------------------------------------------------------------------------- */
/*                           Connection‑level logic                           */
/* -------------------------------------------------------------------------- */

const handleConnection = async (socket: Socket): Promise<void> => {
    const Socket = socket as Socket;

    try {
        const token = Socket.handshake.auth?.token || Socket.handshake.query?.token;
        const decoded = decodeJwtToken(token as string);
        if (!decoded) {
            Socket.emit('socket-error', 'Invalid token provided.');
            Socket.disconnect();
            return;
        }

        const { _id } = decoded as IRequestedUser;
        Socket.userId = _id;

        console.info('[socket] Connected:', _id);

        Socket.join(_id);
        console.info('[socket] Joined rooms:', _id);

        const userChatsData = await getUserChats(_id)
        userChatsData.data.forEach((chat: IChat) => Socket.join(String(chat._id)));
        Socket.join(String(Socket.userId));
        Socket.emit(EMIT.CHAT_LIST_UPDATED, { chats: userChatsData });
        chatSocketsListeners(Socket, io!);

        Socket.on('disconnect', async () => {
            console.info('[socket] Disconnected:', _id);
        });
    } catch (err: any) {
        Socket.emit('socket-error', err?.message ?? 'Unexpected socket error.');
    }
};
