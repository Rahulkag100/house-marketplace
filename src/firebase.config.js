// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC966ONnsQzhqQ05191rz9WJRwMS2ssLJg",
  authDomain: "rahul-house-marketplace.firebaseapp.com",
  projectId: "rahul-house-marketplace",
  storageBucket: "rahul-house-marketplace.appspot.com",
  messagingSenderId: "162820969523",
  appId: "1:162820969523:web:dd8a06bcc6d14be7d0ff46",
  measurementId: "G-P6Z1Q7SM26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()