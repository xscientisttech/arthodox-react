// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5wQg53J2O8CEr28AVIHcjyes1EyroAOw",
  authDomain: "arthodoxotp.firebaseapp.com",
  projectId: "arthodoxotp",
  storageBucket: "arthodoxotp.appspot.com",
  messagingSenderId: "797239297917",
  appId: "1:797239297917:web:31585bfc72d35ddea76e14",
  measurementId: "G-QQ2TS5ECZ2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
