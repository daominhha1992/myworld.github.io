// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCc61PL3pcx8Bu1dILd_fm7vgA4cnWiCIc",
  authDomain: "hahaohan-9486c.firebaseapp.com",
  projectId: "hahaohan-9486c",
  storageBucket: "hahaohan-9486c.firebasestorage.app",
  messagingSenderId: "820514218791",
  appId: "1:820514218791:web:de9cb93ab77fd35db73f02",
  measurementId: "G-2F8FJYKSN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
