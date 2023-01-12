// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCziDPFhwdQh5zaQHPxGMwXXBaER_i6tHA",
  authDomain: "burgerqueen-f4713.firebaseapp.com",
  projectId: "burgerqueen-f4713",
  storageBucket: "burgerqueen-f4713.appspot.com",
  messagingSenderId: "1076355333997",
  appId: "1:1076355333997:web:d278986e8de1953fec6464",
  measurementId: "G-S1Z4D5RJMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);