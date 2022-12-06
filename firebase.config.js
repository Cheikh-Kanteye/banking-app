// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD1cG0UwLfh_J0rwmGKt5TijWcEADNNOM",
  authDomain: "banking-app-1.firebaseapp.com",
  projectId: "banking-app-1",
  storageBucket: "banking-app-1.appspot.com",
  messagingSenderId: "166471730269",
  appId: "1:166471730269:web:e60480a9df7169601779b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
