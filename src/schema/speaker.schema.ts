import { Schema, Document, ObjectId } from "mongoose";

export interface ISpeaker extends Document {
    _id: string | ObjectId | any;
    name: string;
    title: string;
    specialty: string;
    institute: string;
    country: string;
    description: string;
    profileImage?: string;
    createdAt: string;
    updatedAt: string;
}

const SpeakerSchema = new Schema<ISpeaker>({
    name: { type: String },
    title: { type: String },
    specialty: { type: String },
    institute: { type: String },
    country: { type: String },
    description: { type: String },
    profileImage: { type: String },
}, { timestamps: true, versionKey: false });

export { SpeakerSchema };
