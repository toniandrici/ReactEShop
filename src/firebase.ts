import  { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPCsdRb_j9gXhbT0LhCyA5s60bBvXka9M",
    authDomain: "eshop-67ed1.firebaseapp.com",
    projectId: "eshop-67ed1",
    storageBucket: "eshop-67ed1.appspot.com",
    messagingSenderId: "947461658131",
    appId: "1:947461658131:web:4b7d61d7b09c300b7c91e6",
    measurementId: "G-3RZXWX38MT"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore();
   const auth = getAuth();

  export { db, auth}
