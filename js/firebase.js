// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhtBuZVbOKMRIC4vMOBjLNyRkSOwqW-90",
  authDomain: "ppt-q-12f17.firebaseapp.com",
  projectId: "ppt-q-12f17",
  storageBucket: "ppt-q-12f17.appspot.com",
  messagingSenderId: "360186395898",
  appId: "1:360186395898:web:358d0af982bdb0fae0dd43",
  measurementId: "G-1C6L4P33XR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup
document.getElementById("signupBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const role = document.querySelector('input[name="role"]:checked')?.value || "student";

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      email: email,
      role: role
    });

    alert("Signup successful");
    window.location.href = "index.html"; // back to login
  } catch (error) {
    alert(error.message);
  }
});

// Login
document.getElementById("loginBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // redirect handled in onAuthStateChanged
  } catch (error) {
    alert(error.message);
  }
});

// Role-based redirect
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userRef = doc(db, "users", uid);
    getDoc(userRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.role === "student") {
          window.location.href = "upload.html";
        } else if (data.role === "faculty") {
          window.location.href = "faculty.html";
        }
      }
    });
  }
});
