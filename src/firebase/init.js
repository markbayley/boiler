// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfdweYETcsAaazZK7TsYYCMCA-c5nVIiY",
  authDomain: "boiler-66f48.firebaseapp.com",
  projectId: "boiler-66f48",
  storageBucket: "boiler-66f48.appspot.com",
  messagingSenderId: "980009761275",
  appId: "1:980009761275:web:a86415e5dfe83f1046335e",
  measurementId: "G-HZ4FXNHC7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


