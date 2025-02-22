import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAs9Jy48jN3hR7VAqIm2u5EfXxq5JVpbU",
  authDomain: "sdgp-landingpage.firebaseapp.com",
  projectId: "sdgp-landingpage",
  storageBucket: "sdgp-landingpage.firebasestorage.app",
  messagingSenderId: "700543066031",
  appId: "1:700543066031:web:69315681fa8951bfb4195a",
  measurementId: "G-NZ9V9TLEQ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);