// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwBMYEcrOUZvLxG2dWxWeeKr2qIWcq6lQ",
    authDomain: "donate-items---jadude.firebaseapp.com",
    projectId: "donate-items---jadude",
    storageBucket: "donate-items---jadude.appspot.com",
    messagingSenderId: "1088828310183",
    appId: "1:1088828310183:web:e7f4b3f50443ed3af31182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  { app, auth };