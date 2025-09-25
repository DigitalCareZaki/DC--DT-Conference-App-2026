import messaging from "@react-native-firebase/messaging";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { isIOS } from "../constants/theme";
import { firebase_messaging } from "./firebase_service";
import { PermissionsAndroid, Platform } from "react-native";

// Get FCM token
const getFcmToken = async () => {
    try {
        if (!firebase_messaging.isAutoInitEnabled) {
            await firebase_messaging.setAutoInitEnabled(true);
        }
        const fcmToken = await firebase_messaging.getToken();
        return fcmToken || null;
    } catch (error) {
        console.error("FCM token error:", error);
        return null;
    }
};

export async function requestUserPermission() {
    try {
        if (isIOS) {
            // iOS: Ask for notification permission
            await firebase_messaging.registerDeviceForRemoteMessages();
            const authStatus = await firebase_messaging.requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            if (enabled) {
                return getFcmToken();
            } else {
                return null;
            }
        } else if (!isIOS) {
            if (Platform.Version >= 33) {
                // Android 13+ (API 33+): Request runtime notification permission
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
                );

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return getFcmToken();
                } else {
                    return null;
                }
            } else {
                // Android < 13 doesn’t need runtime permission
                return getFcmToken();
            }
        }
    } catch (error) {
        return null;
    }
}

const showIOSLocal = ({ title, body }) => {
    // run on main thread for safety
    requestAnimationFrame(() => {
        PushNotificationIOS.addNotificationRequest({
            id: String(Date.now()),
            title: title || 'New Notification',
            body: body || 'You have a new message',
            sound: 'default',
            badge: 1,
            threadId: 'default',
        });
    });
};


// Notification listener
export const notificationListener = async (onDone) => {
    // App opened from quit state
    firebase_messaging
        .getInitialNotification()
        .then(async (remoteMessage) => {
            if (remoteMessage) onDone(remoteMessage);
        });

    // App in background, notification opened
    firebase_messaging.onNotificationOpenedApp(async (remoteMessage) => {
        if (remoteMessage) onDone(remoteMessage);
    });

    // Foreground message handler
    firebase_messaging.onMessage(async (remoteMessage) => {
        onDone(remoteMessage);

        const title = remoteMessage?.notification?.title ?? remoteMessage?.data?.title;
        const body = remoteMessage?.notification?.body ?? remoteMessage?.data?.body;

        if (isIOS) {
            showIOSLocal({ title, body });
        } else {
            PushNotification.localNotification({
                channelId: "default-channel-id",
                title: title || "New Notification",
                message: body || "You have a new message",
                playSound: true,
                soundName: "default",
                smallIcon: "ic_launcher",
                importance: 4,
            });
        }
    });
   
};


export const createNotificationChannel = () => {
    PushNotification.createChannel(
        {
            channelId: "default-channel-id", // must match with localNotification
            channelName: "Default Channel", // visible to user in settings
            channelDescription: "General notifications",
            playSound: true,
            soundName: "default",
            importance: 4, // max: 5
            vibrate: true,
        },
        (created) => { } // log whether new or existing
    );
}