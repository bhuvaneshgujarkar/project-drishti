// src/firebase.js

// Import core Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmcF34U_5Ig87ZlMYvu_5QKSbqxNOt3K4",
  authDomain: "project-drishti-e9881.firebaseapp.com",
  projectId: "project-drishti-e9881",
  storageBucket: "project-drishti-e9881.firebasestorage.app",
  messagingSenderId: "835187785390",
  appId: "1:835187785390:web:c3990de368d37616fb773f",
  measurementId: "G-HNWS2CWH4D"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// ✅ Export what other files will need
export { db, auth, analytics };
