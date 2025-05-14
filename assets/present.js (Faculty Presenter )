import { db } from './app.js';
import { collection, query, orderBy, getDocs } from 'https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js';

let slides = [], idx = 0;
const frame = document.getElementById('frame');
const prev  = document.getElementById('prev');
const next  = document.getElementById('next');

async function loadAll() {
  const q = query(collection(db,'presentations'), orderBy('ts','asc'));
  const snap = await getDocs(q);
  slides = snap.docs.map(d => d.data().url);
  show();
}

function show() {
  frame.innerHTML = slides.length
    ? `<iframe src="${slides[idx]}" width="100%" height="600px"></iframe>`
    : '<p>No PPTs yet</p>';
}
prev.onclick = () => { idx = Math.max(0,idx-1); show(); };
next.onclick = () => { idx = Math.min(slides.length-1,idx+1); show(); };
loadAll();
