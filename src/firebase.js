// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-62gks30c8LJynXnjCHKUxG6_cITupN8",
  authDomain: "receipts-e2ee4.firebaseapp.com",
  projectId: "receipts-e2ee4",
  storageBucket: "receipts-e2ee4.appspot.com",
  messagingSenderId: "824277928964",
  appId: "1:824277928964:web:169d6f8e98f84034d43951",
  measurementId: "G-1SZY6M3B64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
export const storage = getStorage(app);