import { Schema, Document, ObjectId } from "mongoose";

export interface IExhibition extends Document {
    _id: string | ObjectId | any;
    title: string;
    address: string;
    industry: string;
    venue: string;
    description: string;
    booth: string;
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
    contactLink: { type: String },
    location: { type: String },
}, { timestamps: true, versionKey: false });

export { ExhibitionSchema };
