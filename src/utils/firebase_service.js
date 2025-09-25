import { initializeApp } from 'firebase/app';
import { getMessaging } from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBtGgI4P2t6Xkd8RHVkJrN7b5uWWyibGMw",
    authDomain: "conferenceapp-95d84.firebaseapp.com",
    projectId: "conferenceapp-95d84",
    storageBucket: "conferenceapp-95d84.firebasestorage.app",
    messagingSenderId: "158098280930",
    appId: "1:158098280930:web:d6f3c054cb3316d5da69bb",
    measurementId: "G-B56V5ZZRW5"
};

const app = initializeApp(firebaseConfig);
export const firebase_messaging = getMessaging(app);
