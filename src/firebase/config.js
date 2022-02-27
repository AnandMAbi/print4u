
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACbuI8M2AEe4vq7zHmnJcc15UT_s6lBjM",
  authDomain: "print4u-d49a5.firebaseapp.com",
  projectId: "print4u-d49a5",
  storageBucket: "print4u-d49a5.appspot.com",
  messagingSenderId: "205885562814",
  appId: "1:205885562814:web:e407a8542ce73fadbe63ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const pStorage = firebase.storage();
const pFirestore = firebase.firestore();

export{ pStorage, pFirestore};