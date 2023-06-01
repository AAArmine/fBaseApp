// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhWYw4WkF5iliO4A1qACMgZ6oo2G1yCFU",
  authDomain: "fir-implement-711cd.firebaseapp.com",
  projectId: "fir-implement-711cd",
  storageBucket: "fir-implement-711cd.appspot.com",
  messagingSenderId: "136544465159",
  appId: "1:136544465159:web:9119947f668647fa1d15a2",
  measurementId: "G-77BMQQJVBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
