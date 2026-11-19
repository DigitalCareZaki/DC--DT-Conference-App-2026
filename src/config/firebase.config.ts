import admin from 'firebase-admin';
import path from 'path';

const serviceAccountPath = path.resolve('firebase-config.json');
const serviceAccount = require(serviceAccountPath);
const FCM_TOPIC = process.env.FCM_TOPIC || 'general';

const app =
    admin.apps.length > 0
        ? admin.app()
        : admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

export const firebaseApp = app;
export const firebaseMessaging = admin.messaging(app);

export async function sendNotificationToTopic(params: {
    title?: string;
    message?: string;
    data?: Record<string, string>;
}): Promise<string> {
    const { title, message, data } = params;

    try {
        const response = await firebaseMessaging.send({
            topic: FCM_TOPIC,
            notification: {
                title,
                body: message,
            },
            data,
        });
        console.log(JSON.stringify({ response }, null, 2));
        return response;
    } catch (error) {
        console.error('Error sending notification to topic:', error);
        throw error;
    }
}