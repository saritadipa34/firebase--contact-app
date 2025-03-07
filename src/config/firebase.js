// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeDKEjieOSyeT0BZaxpue-d1mzxpal1l8",
  authDomain: "vite-contact-fb264.firebaseapp.com",
  projectId: "vite-contact-fb264",
  storageBucket: "vite-contact-fb264.firebasestorage.app",
  messagingSenderId: "627436324711",
  appId: "1:627436324711:web:2411c32d853c820633d1c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);