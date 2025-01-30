// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLlcS8DExBe7EA_NGH5gJi5nPeDpe9uZ4",
  authDomain: "movil-9ff93.firebaseapp.com",
  projectId: "movil-9ff93",
  storageBucket: "movil-9ff93.firebasestorage.app",
  messagingSenderId: "447891728441",
  appId: "1:447891728441:web:1bdfd9a3f48f4331a685e8",
  measurementId: "G-BPCJPWKPJH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const db = getFirestore(app);