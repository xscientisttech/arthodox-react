
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/app';
import 'firebase/database';
// import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAm6NiP5hyBTqH2aTaiQI3T_84DBr-UdZw",
  authDomain: "arthodox-7e239.firebaseapp.com",
  projectId: "arthodox-7e239",
  storageBucket: "arthodox-7e239.appspot.com",
  messagingSenderId: "272196047464",
  appId: "1:272196047464:web:760d2842f281f80c0921dd",
  measurementId: "G-HWR94G2QVC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);