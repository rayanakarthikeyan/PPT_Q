// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhtBuZVbOKMRIC4vMOBjLNyRkSOwqW-90",
  authDomain: "ppt-q-12f17.firebaseapp.com",
  projectId: "ppt-q-12f17",
  storageBucket: "ppt-q-12f17.appspot.com",  // Fixed typo (.app → .com)
  messagingSenderId: "360186395898",
  appId: "1:360186395898:web:358d0af982bdb0fae0dd43",
  measurementId: "G-1C6L4P33XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
