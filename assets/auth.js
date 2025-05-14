import { auth } from './app.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.x/firebase-auth.js';
const form = document.getElementById('loginForm'), err = document.getElementById('err');
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, form.email.value, form.pass.value);
  } catch(e) { err.textContent = e.message; }
});
