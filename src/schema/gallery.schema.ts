import { Schema, Document, ObjectId } from "mongoose";

export interface IGallery extends Document {
    _id: string | ObjectId | any;
    media: string;
    createdAt: string;
    updatedAt: string;
}

const GallerySchema = new Schema<IGallery>({
    media: { type: String, required: true },
}, { timestamps: true, versionKey: false });

export { GallerySchema };
