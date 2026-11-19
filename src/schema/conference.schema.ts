import { Schema, Document, ObjectId } from "mongoose";

export interface IConferenceSession {
    title: string;
    speaker: string;
    time: string;
    description: string;
}

export interface IConference extends Document {
    _id: string | ObjectId | any;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    time: string;
    venue: string;
    url: string;
    brochure?: string;
    sessions?: IConferenceSession[];
    registeredUsers: (string | ObjectId)[];
    createdAt: string;
    updatedAt: string;
}

const ConferenceSessionSchema = new Schema<IConferenceSession>({
    title: { type: String },
    speaker: { type: String },
    time: { type: String },
    description: { type: String }
}, { _id: false });

const ConferenceSchema = new Schema<IConference>({
    title: { type: String },
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    time: { type: String },
    venue: { type: String },
    url: { type: String },
    brochure: { type: String },
    registeredUsers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    sessions: [ConferenceSessionSchema],
}, { timestamps: true, versionKey: false });

export { ConferenceSchema };
