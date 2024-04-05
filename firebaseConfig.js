// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDatk2yFTspy9mSO2QWTjM2vUxd_g5tZLA",
  authDomain: "wastemanage-cbd93.firebaseapp.com",
  projectId: "wastemanage-cbd93",
  storageBucket: "wastemanage-cbd93.appspot.com",
  messagingSenderId: "589147853165",
  appId: "1:589147853165:web:5ef7d9b870da024d898a64",
  measurementId: "G-Z1CL22M3Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
// export const firestore = getFirestore(app);

// export const db = getDatabase(app);
const db = getFirestore(app)
export {db}