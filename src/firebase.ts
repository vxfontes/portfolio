// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './utils/firebaseKey';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBaseApp = getFirestore(app);