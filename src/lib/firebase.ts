
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3X9yNHabwgdf1afAg7zRebZAKx7WU-50",
  authDomain: "apollo-web-clone.firebaseapp.com",
  projectId: "apollo-web-clone",
  storageBucket: "apollo-web-clone.firebasestorage.app",
  messagingSenderId: "1040900901645",
  appId: "1:1040900901645:web:ba7e2af9b1d9861309be44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
