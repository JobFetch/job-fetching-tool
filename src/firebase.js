// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjIOT0RrIQoS-kuOvFaveVQAxEvFY9ySU",
  authDomain: "jobfetch-19e3b.firebaseapp.com",
  projectId: "jobfetch-19e3b",
  storageBucket: "jobfetch-19e3b.appspot.com",
  messagingSenderId: "860730594421",
  appId: "1:860730594421:web:bcd9492a23dca01ba5543c",
  measurementId: "G-23JCB8QWQX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
