// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f941b.firebaseapp.com",
  projectId: "mern-estate-f941b",
  storageBucket: "mern-estate-f941b.appspot.com",
  messagingSenderId: "1076126738180",
  appId: "1:1076126738180:web:3ff2fcce43c21b19e15251",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
