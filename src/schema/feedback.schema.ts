import { Schema, Document, ObjectId } from "mongoose";

export interface IFeedback extends Document {
    userId?: string | ObjectId;
    rating: number;
    likedMost?: string;
    suggestions?: string;
    createdAt: string;
    updatedAt: string;
}

export const FeedbackSchema = new Schema<IFeedback>({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    likedMost: { type: String },
    suggestions: { type: String },
}, { timestamps: true, versionKey: false });
