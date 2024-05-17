// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlkPPxEg0InwhuCHWl-31HU7vh91Knk-8",
  authDomain: "e-commerce-project-cb3f8.firebaseapp.com",
  projectId: "e-commerce-project-cb3f8",
  storageBucket: "e-commerce-project-cb3f8.appspot.com",
  messagingSenderId: "1079731956198",
  appId: "1:1079731956198:web:3a47648c14229763b2ce27",
  measurementId: "G-XLR7YKR881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}