import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQYJvOubUa-jE-o1NxcQEBQnpJwgAiH6o",
  authDomain: "food-delivery-bc1c1.firebaseapp.com",
  databaseURL:
    "https://food-delivery-bc1c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-delivery-bc1c1",
  storageBucket: "food-delivery-bc1c1.appspot.com",
  messagingSenderId: "527557094205",
  appId: "1:527557094205:web:6f30d3b75d44de510d7354",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
