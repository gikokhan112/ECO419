// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration
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

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("statusMessage");

    if (!name || !email || !message) {
        statusMessage.textContent = "All fields are required!";
        statusMessage.style.color = "red";
        return;
    }

    try {
        // Save to Firestore
        await addDoc(collection(db, "contacts"), { name, email, message, timestamp: new Date() });

        // Success message
        statusMessage.textContent = "Message sent successfully!";
        statusMessage.style.color = "green";

        // Clear the form
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error saving message:", error);
        statusMessage.textContent = "Error sending message. Try again!";
        statusMessage.style.color = "red";
    }
});
