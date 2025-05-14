import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";
import { getFirestore, doc, getDoc }   from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.x/firebase-storage.js";

const firebaseConfig = /* FIREBASE_CONFIG */;
const app     = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

onAuthStateChanged(auth, async user => {
  if (!user) {
    if (!/login\.html|signup\.html$/.test(location.pathname))
      return window.location = 'login.html';
    return;
  }
  const email = user.email;
  const roleDoc = await getDoc(doc(db,'roles',email));
  const role = roleDoc.exists() ? roleDoc.data().role : 'student';

  if (role === 'student' && /present\.html$/.test(location.pathname)) {
    alert('Only students may view this page.');
    return window.location = 'index.html';
  }
  if (role === 'faculty' && /index\.html$/.test(location.pathname)) {
    alert('Only faculty may view this page.');
    return window.location = 'present.html';
  }
});
