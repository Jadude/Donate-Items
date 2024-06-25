// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, firebaseConfig };