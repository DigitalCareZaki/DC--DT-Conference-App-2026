import { Schema, Document, ObjectId } from "mongoose";

export interface IWorkshopModule {
    title: string;
    description: string;
    duration: string;
}

export interface IWorkshop extends Document {
    title: string;
    description: string;
    date: Date;
    time: string;
    venue: string;
    url: string
    modules: IWorkshopModule[];
    registeredUsers: (string | ObjectId)[];
    createdAt: string;
    updatedAt: string;
}

const WorkshopModuleSchema = new Schema<IWorkshopModule>({
    title: { type: String },
    description: { type: String },
    duration: { type: String },
}, { _id: false });

const WorkshopSchema = new Schema<IWorkshop>({
    title: { type: String },
    description: { type: String },
    date: { type: Date },
    time: { type: String },
    venue: { type: String },
    url: { type: String },
    modules: [WorkshopModuleSchema],
    registeredUsers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
}, { timestamps: true, versionKey: false });

export { WorkshopSchema };
