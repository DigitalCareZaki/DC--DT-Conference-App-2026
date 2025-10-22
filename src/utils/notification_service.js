import messaging from '@react-native-firebase/messaging';
import { isIOS } from '../constants/theme';
import { firebase_messaging } from './firebase_service';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

// Get FCM token
const getFcmToken = async () => {
  try {
    if (!firebase_messaging.isAutoInitEnabled) {
      await firebase_messaging.setAutoInitEnabled(true);
    }
    const fcmToken = await firebase_messaging.getToken();
    return fcmToken || null;
  } catch (error) {
    console.error('FCM token error:', error);
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
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
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



// Notification listener
export const notificationListener = async onDone => {
  // App opened from quit state
  firebase_messaging.getInitialNotification().then(async remoteMessage => {
    if (remoteMessage) onDone(remoteMessage);
  });

  // App in background, notification opened
  firebase_messaging.onNotificationOpenedApp(async remoteMessage => {
    if (remoteMessage) onDone(remoteMessage);
  });

  // Foreground message handler
  firebase_messaging.onMessage(async remoteMessage => {
    const title =
      remoteMessage?.notification?.title ?? remoteMessage?.data?.title;
    const body = remoteMessage?.notification?.body ?? remoteMessage?.data?.body;

    Alert.alert(title, body)
  });
};

