import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0ISdBKWpLkhTjFcKRVzaEHcvWsHpoUmI",
  authDomain: "your-indian-shop.firebaseapp.com",
  projectId: "your-indian-shop",
  storageBucket: "your-indian-shop.appspot.com",
  messagingSenderId: "225035261326",
  appId: "1:225035261326:web:ae1c3b3464566eb331c0df",
  measurementId: "G-MYCJRZ92GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider();

export {auth, provider};