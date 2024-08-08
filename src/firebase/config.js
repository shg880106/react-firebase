// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT5VWSV4EUkn9ftcxYfF7CaTZ1f3Y2AWE",
  authDomain: "carpishop-5bcdd.firebaseapp.com",
  projectId: "carpishop-5bcdd",
  storageBucket: "carpishop-5bcdd.appspot.com",
  messagingSenderId: "578134225826",
  appId: "1:578134225826:web:61233c0140d59529a378fb",
  measurementId: "G-72FXZ9QEG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//almacenando la db: data base
export const db = getFirestore(app);