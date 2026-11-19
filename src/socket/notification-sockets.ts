import { Server } from "socket.io";
import { Socket } from "socket.io";

export const notificationListeners = (socket: Socket, io: Server<any, any, any, Socket>) => {
    socket.on("unread-notifications-count", async () => {
        // const unreadNotificationsCount = await countNotifications({ receivers: socket.userId, readBy: { $ne: socket.userId } });
        // io.to(socket.userId).emit("unread-notifications-count", unreadNotificationsCount);
    });
};