import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlyAm9sItA8QLdoUxtS7wOdet3bBv75B0",
  authDomain: "chat-ea88b.firebaseapp.com",
  projectId: "chat-ea88b",
  storageBucket: "chat-ea88b.appspot.com",
  messagingSenderId: "232274871652",
  appId: "1:232274871652:web:9641774ca8f2cffb31e671"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
