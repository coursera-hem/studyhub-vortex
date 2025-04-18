
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
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

// For development environments where the domain isn't authorized in Firebase
// This helps to avoid the "auth/unauthorized-domain" error during development
const isLocalhost = 
  window.location.hostname === "localhost" || 
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname.includes("lovableproject.com");

// Connect to auth emulator if in development mode
if (isLocalhost) {
  console.log("Running in development mode, using auth emulator");
  // Uncomment the line below when using Firebase emulators
  // connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

// Log current domain for debugging
console.log("Current hostname:", window.location.hostname);
console.log("Is considered local/development:", isLocalhost);

export default app;
