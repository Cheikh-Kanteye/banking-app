import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAYpYL2DEsYmC1Jf-3R4fzuhe7OEtooFeQ",
  authDomain: "banking-app-a6341.firebaseapp.com",
  projectId: "banking-app-a6341",
  storageBucket: "banking-app-a6341.appspot.com",
  messagingSenderId: "1070128367194",
  appId: "1:1070128367194:web:f87099c9710dc9ee65ba63",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
