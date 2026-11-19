import { Schema, Document, ObjectId } from "mongoose";
import { SPEAKER_TYPE } from "../utils/constants";

export interface ISpeaker extends Document {
    _id: string | ObjectId | any;
    name: string;
    title: string;
    specialty: string;
    institute: string;
    country: string;
    description: string;
    profileImage?: string;
    speakerType: SPEAKER_TYPE;
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
    speakerType: { type: String, enum: SPEAKER_TYPE },
}, { timestamps: true, versionKey: false });

export { SpeakerSchema };
