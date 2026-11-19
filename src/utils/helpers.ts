import { Response } from 'express';
import { compare, hash } from 'bcrypt';
import mongoose from 'mongoose';
// import admin from 'firebase-admin';
// import path from 'path';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { Types } from 'mongoose';
import { Logger } from './Logger';
import nodemailer from 'nodemailer';
require('dotenv').config();

export const logger = new Logger('Application');

// const serviceAccount = path.resolve('./healthasia-service-account.json');

/** Singleton Firebase app. */
// export const firebaseApp =
//   admin.apps.length === 0 ?
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       storageBucket: process.env.STORAGE_BUCKET,
//     })
//     : admin.app();

// export const sendFirebaseNotification = async ({ title, body, tokens }: IFirebaseNotificationParams) => {
//   const message = {
//     notification: { title, body },
//     tokens
//   };

//   console.log("message >>>>>>>>>>>> ", message);

//   try {
//     const response = await firebaseApp.messaging().sendEachForMulticast(message);
//     console.log('json.stringify(response) >>>> ', JSON.stringify(response));
//     console.log('successCount >>>> ', response?.successCount);
//     console.log('failureCount >>>> ', response?.failureCount);
//     return response;
//   } catch (error) {
//     console.log(`Error sending Firebase notification >>>>>>>>>> ${error}`);
//   }
// };

// generate response with status code
export const generateResponse = (data: any, message: string, res: Response, code = 200) => {
  return res.status(code).json({
    statusCode: code,
    message,
    data,
  });
}

export const getMongoId = (id?: string) => {
  if (id && !Types.ObjectId.isValid(id)) return false;
  return new mongoose.Types.ObjectId(id as string);
}

export const hashPassword = async (password: string) => {
  return await hash(password, 10);
}

export const decodeJwtToken = (token: string): JwtPayload | null => {
  try {
    const decodedToken = verify(token, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload;
    return decodedToken;
  } catch (error) {
    logger.error('JWT verification error', 'Auth', error);
    return null;
  }
};

export const isPasswordMatched = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await compare(password, hashedPassword);
}

export const generateResetPasswordToken = (id: string): string => {
  const secret = process.env.RESET_TOKEN_SECRET;
  if (!secret) {
    throw new Error('Reset token secret is not configured');
  }

  const expiresIn = process.env.RESET_TOKEN_EXPIRY || '20m';

  return sign(
    { _id: id },
    secret,
    { expiresIn });
}

export const formatAmount = (amount: number | string | undefined | null) => {
  if (amount === undefined || amount === null) return "0.00";

  return Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatNumberWithZeros = (number: number | string | undefined | null) => {
  let str;

  if (typeof number === 'undefined' || number === null) return "-";

  if (typeof number === "string") str = number;
  else str = number.toString();

  return str.padStart(3, "0");
};

// Write a function to create a four digit OTP
export const generateOTP = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

const emailTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email credentials are not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export const sendEmail = async ({ to, subject, text, html }: SendEmailParams) => {
  const transporter = emailTransporter();

  console.log('Sending email to:', to);
  console.log("From: ", process.env.EMAIL_USER);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    ...(html ? { html } : {}),
  });
};

export const sendOtpEmail = async (email: string, otp: string, expiresInMinutes: number) => {
  const appName = process.env.APP_NAME || 'Build Asia';
  const subject = `${appName} OTP Verification`;

  const text = `Your one-time password is ${otp}. It will expire in ${expiresInMinutes} minute${expiresInMinutes === 1 ? '' : 's'}.`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background-color: #007bff; color: #ffffff; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; text-align: center; }
        .otp { font-size: 32px; font-weight: bold; color: #007bff; margin: 20px 0; padding: 10px; border: 2px dashed #007bff; border-radius: 4px; display: inline-block; }
        .expiry { font-size: 16px; color: #666666; margin-bottom: 20px; }
        .instructions { font-size: 14px; color: #333333; margin-bottom: 30px; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${appName}</h1>
        </div>
        <div class="content">
          <h2>OTP Verification</h2>
          <p class="instructions">Thank you for using ${appName}. To complete your verification, please use the one-time password (OTP) below:</p>
          <div class="otp">${otp}</div>
          <p class="expiry">This OTP will expire in ${expiresInMinutes} minute${expiresInMinutes === 1 ? '' : 's'}.</p>
          <p class="instructions">If you didn't request this OTP, please ignore this email or contact support.</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} ${appName}. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail({ to: email, subject, text, html });
};

export const getOtpExpiryMinutes = (): number => {
  return Number(process.env.OTP_EXPIRY_MINUTES || 10);
}

export const getResetPasswordExpiryMinutes = (): number => {
  return Number(process.env.RESET_PASSWORD_EXPIRY_MINUTES || 30);
}

export const getExpiryDate = (minutes: number): Date => {
  return new Date(Date.now() + minutes * 60 * 1000);
}

// export const createAndSendNotifications = async ({ type, sender, product, bid, recipientBusiness }: ICreateAndSendNotificationParams) => {

//   console.log('createAndSendNotifications >>>> ', { type, sender, product, bid, recipientBusiness });

//   let body: string = '';
//   let title: string = '';
//   let productObj: IProduct | null = null;
//   let bidObj: IBid | null = null;
//   let recipients: IUser[] = [];

//   let senderObj: IUser | null = await getUserByQuery({ _id: sender }).populate('business');
//   if (product) productObj = await getProduct({ _id: product });
//   if (bid) bidObj = await getBid({ _id: bid });

//   switch (type) {
//     // case NOTIFICATION_TYPES.CREATE_REQUEST:
//     //   recipients = await getUsersByQuery({
//     //     type: ROLE_TYPES.BANK,
//     //     [`notificationSettings.${NOTIFICATION_TYPES.CREATE_REQUEST}`]: true,
//     //     business: { $in: productObj?.confirmingBanks },
//     //   }).select('_id');

//     //   title = `New ${productObj?.type} Request`;

//     //   body = `Ref No: ${productObj?.refId} from ${senderObj?.business?.name} by ${senderObj?.name}`;
//     //   break;

//     // case NOTIFICATION_TYPES.CREATE_BID:
//     //   recipients = await getUsersByQuery({
//     //     [`notificationSettings.${NOTIFICATION_TYPES.CREATE_BID}`]: true,
//     //     business: productObj?.business,
//     //     // $or: [
//     //     //   { business: bidObj?.buyer }
//     //     // ]
//     //   }).select('id');

//     //   title = 'New Bid';
//     //   body = `${senderObj?.business?.name} has placed a bid on request # ${productObj?.refId}`;
//     //   break;

//     default:
//       break;
//   }

//   const receivers: string[] = recipients.map((user: any) => user._id.toString());
//   if (!receivers?.length) return;

//   // get fcm tokens of users
//   const tokens = await getFcmTokens({ _id: { $in: receivers } });

//   let notification = await createNotification({
//     title,
//     message: body,
//     type,
//     sender,
//     receivers,
//     ...(product && { product }),
//     ...(bid && { bid }),
//   });

//   const populateOptions = product ? [{ path: 'product', select: 'productType type' }] : [];
//   let notificationObj: any;

//   if (notification && populateOptions.length > 0) {
//     notificationObj = await getNotification({ _id: notification._id }).populate(populateOptions);
//   } else {
//     notificationObj = await getNotification({ _id: notification._id });
//   }

//   // emitSocketEvent(receivers, SOCKET_EVENTS.NOTIFICATION, notificationObj);

//   if (!tokens?.length) return notification;

//   await sendFirebaseNotification({ title, body, tokens });

//   return notification;
// }
