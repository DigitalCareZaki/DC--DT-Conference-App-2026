import { Schema, Document, ObjectId, Types } from "mongoose";
import { EXHIBITION_CATEGORY } from "../utils/constants";

export interface IExhibition extends Document {
    _id: string | ObjectId | any;
    title: string;
    address: string;
    industry: string;
    venue: string;
    description: string;
    booth: string;
    category?: string;
    exhibitor: Types.ObjectId | string;
    city: string;
    contactLink: string;
    location: string;
    createdAt: string;
    updatedAt: string;
}

const ExhibitionSchema = new Schema<IExhibition>({
    title: { type: String },
    address: { type: String },
    industry: { type: String },
    venue: { type: String },
    description: { type: String },
    booth: { type: String },
    category: { type: String, enum: Object.values(EXHIBITION_CATEGORY), default: EXHIBITION_CATEGORY.NONE },
    exhibitor: { type: Schema.Types.ObjectId, ref: 'User' },
    city: { type: String },
    contactLink: { type: String },
    location: { type: String },
}, { timestamps: true, versionKey: false });

export { ExhibitionSchema };
