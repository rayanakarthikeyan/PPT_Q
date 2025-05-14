import { auth, db } from './app.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.x/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js';
const form = document.getElementById('signupForm'), err = document.getElementById('err');
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const cred = await createUserWithEmailAndPassword(auth, form.email.value, form.pass.value);
    await setDoc(doc(db,'roles',cred.user.email), { role: 'student' });
    window.location = 'index.html';
  } catch(e) {
    err.textContent = e.message;
  }
});
