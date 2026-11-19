import { Schema, Types, Document } from "mongoose";

export interface IMessage extends Document {
    chatId: Types.ObjectId;
    sender: Types.ObjectId;
    receiver: Types.ObjectId;
    type: "text" | "media";
    message: string;
    isRead: boolean;
    attachments?: any[];
    createdAt?: Date;
    updatedAt?: Date;
}

export const MessageSchema = new Schema<IMessage>({
    chatId: { type: Schema.Types.ObjectId, ref: "Chat", index: true },
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    message: String,
    isRead: { type: Boolean, default: false },
    type: { type: String, enum: ["text", "media"], default: "text" },
    attachments: [{ type: Schema.Types.Mixed }],
}, { timestamps: true });