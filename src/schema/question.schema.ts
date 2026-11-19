import { Schema, Document, ObjectId } from "mongoose";

export interface IQuestion extends Document {
    _id: string | ObjectId;
    userId: string | ObjectId;
    speakerId: string | ObjectId;
    questionText: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const QuestionSchema = new Schema<IQuestion>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    speakerId: { type: Schema.Types.ObjectId, ref: 'Speaker', required: true },
    questionText: { type: String, required: true }
}, { timestamps: true, versionKey: false });
