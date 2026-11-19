import { Schema, Document, ObjectId } from "mongoose";

export interface INotification extends Document {
    _id: string | ObjectId | any;
    title: string;
    message: string;
    createdAt: string;
    updatedAt: string;
}

export const NotificationSchema = new Schema<INotification>({
    title: { type: String },
    message: { type: String },
}, { timestamps: true, versionKey: false });
