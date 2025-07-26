// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dynamic-news-2256f.firebaseapp.com",
  projectId: "dynamic-news-2256f",
  storageBucket: "dynamic-news-2256f.firebasestorage.app",
  messagingSenderId: "456662720810",
  appId: "1:456662720810:web:bc8203671b2387b7493e53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);