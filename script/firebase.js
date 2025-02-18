import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK1tkNkRfUD7FRGvBMKFFcOG-7pdMUNDk",
    authDomain: "eco419-1b737.firebaseapp.com",
    projectId: "eco419-1b737",
    storageBucket: "eco419-1b737.appspot.com",
    messagingSenderId: "1071459084573",
    appId: "1:1071459084573:web:a8382ebe1c53daa2b599f4",
    measurementId: "G-R03LMPMMWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
