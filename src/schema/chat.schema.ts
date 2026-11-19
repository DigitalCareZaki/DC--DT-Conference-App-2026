import { Schema, Types, Document } from "mongoose";

export interface IChat extends Document {
    participants: Types.ObjectId[]; // user ids
    lastMessage?: Types.ObjectId | null;
    isBlocked: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export const ChatSchema = new Schema<IChat>({
    participants: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message", default: null },
    isBlocked: { type: Boolean, default: false }
}, { timestamps: true });

ChatSchema.index({ participants: 1 }, { unique: false }); 