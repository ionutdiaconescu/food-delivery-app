import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    "AIzaSyDQYJvOubUa-jE-o1NxcQEBQnpJwgAiH6o",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    "food-delivery-bc1c1.firebaseapp.com",
  databaseURL:
    process.env.REACT_APP_FIREBASE_DB_URL ||
    process.env.REACT_APP_FIREBASE_DATABASE_URL ||
    "https://food-delivery-bc1c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "food-delivery-bc1c1",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET ||
    "food-delivery-bc1c1.appspot.com",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_ID || "527557094205",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    "1:527557094205:web:6f30d3b75d44de510d7354",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
