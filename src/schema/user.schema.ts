import { Schema, Document, Types } from "mongoose";
import { hashPassword } from "../utils/helpers";
import { ROLE, FAVORITE_TYPE } from "../utils/constants";
import { sign } from "jsonwebtoken";

export interface IUserFavorite {
    type: FAVORITE_TYPE;
    favoriteId: Types.ObjectId | string | Document;
}

export interface IUser extends Document {
    _id: Types.ObjectId | string;
    name?: string;
    email: string;
    password: string;
    role: ROLE;
    city?: string;
    dob?: Date;
    companyName?: string;
    designation?: string;
    displayName?: string;
    fcmToken?: string;
    facebookLink?: string;
    instagramLink?: string;
    linkedinLink?: string;
    youtubeLink?: string;
    twitterLink?: string;
    isDeleted: boolean;
    isVerified?: boolean;
    appleUserId?: string;
    otp?: string;
    otpExpiry?: Date;
    resetPasswordToken?: string;
    resetPasswordExpiry?: Date;
    favorites: IUserFavorite[];
    generateAccessToken(): string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: String,
        email: { type: String, lowercase: true },
        password: { type: String, required: true, select: false },
        role: { type: String, enum: Object.values(ROLE), default: ROLE.CONFERENCE_DELEGATE },
        city: String,
        dob: { type: Date, default: null },
        companyName: String,
        designation: String,
        displayName: String,
        facebookLink: String,
        instagramLink: String,
        linkedinLink: String,
        youtubeLink: String,
        twitterLink: String,
        isVerified: { type: Boolean, default: false },
        otp: String,
        otpExpiry: Date,
        resetPasswordToken: String,
        resetPasswordExpiry: Date,
        favorites: {
            type: [
                {
                    type: { type: String, enum: Object.values(FAVORITE_TYPE), required: true },
                    favoriteId: { type: Schema.Types.ObjectId, required: true, refPath: "favorites.type" }
                }
            ],
            default: []
        },
        fcmToken: String,
        isDeleted: { type: Boolean, default: false },
        appleUserId: { type: String, sparse: true }
    },
    { timestamps: true, versionKey: false }
);

UserSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await hashPassword(this.password);
    next();
});

UserSchema.methods.generateAccessToken = function (this: IUser): string {
    return sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

UserSchema.index({ email: 1 });
UserSchema.index({ appleUserId: 1 });

export { UserSchema };
