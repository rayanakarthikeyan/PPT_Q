// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhtBuZVbOKMRIC4vMOBjLNyRkSOwqW-90",
  authDomain: "ppt-q-12f17.firebaseapp.com",
  projectId: "ppt-q-12f17",
  storageBucket: "ppt-q-12f17.firebasestorage.app",
  messagingSenderId: "360186395898",
  appId: "1:360186395898:web:358d0af982bdb0fae0dd43",
  measurementId: "G-1C6L4P33XR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
