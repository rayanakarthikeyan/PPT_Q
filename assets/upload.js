import { auth, db, storage } from './app.js';
import { collection, query, where, orderBy, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js';
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.x/firebase-storage.js';

const form = document.getElementById('uploadForm'), list = document.getElementById('myList');

async function loadMine() {
  list.innerHTML = '';
  const q = query(
    collection(db,'presentations'),
    where('uploader','==',auth.currentUser.email),
    orderBy('ts','asc')
  );
  (await getDocs(q)).forEach(d => {
    const { topic, url } = d.data();
    const li = document.createElement('li');
    li.innerHTML = `${topic} – <a href="${url}" target="_blank">View</a>`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const file  = document.getElementById('ppt').files[0];
  const topic = document.getElementById('topic').value;
  const ts    = Date.now();
  const path  = `presentations/${ts}_${file.name}`;
  const refS  = ref(storage,path);
  await uploadBytes(refS,file);
  const url = await getDownloadURL(refS);
  await addDoc(collection(db,'presentations'),{
    uploader: auth.currentUser.email,
    topic, url, ts
  });
  form.reset(); loadMine();
});
auth.onAuthStateChanged(u => u && loadMine());
