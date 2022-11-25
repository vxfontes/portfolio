// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './utils/firebaseKey';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);