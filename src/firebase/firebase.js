// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD5wQg53J2O8CEr28AVIHcjyes1EyroAOw",
    authDomain: "arthodoxotp.firebaseapp.com",
    projectId: "arthodoxotp",
    storageBucket: "arthodoxotp.appspot.com",
    messagingSenderId: "797239297917",
    appId: "1:797239297917:web:31585bfc72d35ddea76e14",
    measurementId: "G-QQ2TS5ECZ2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
