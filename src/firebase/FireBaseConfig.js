// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8_XZSWok0fTFPiTAogP1-EGAyI8zsxY",
  authDomain: "chat-3a570.firebaseapp.com",
  projectId: "chat-3a570",
  storageBucket: "chat-3a570.appspot.com",
  messagingSenderId: "236734324796",
  appId: "1:236734324796:web:414edc019ff518b7cae339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider=GoogleAuthProvider()