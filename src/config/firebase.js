import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsIcorA4ejKurIEhgOJQ072BrrqfzxHNM",
    authDomain: "eventos-c887c.firebaseapp.com",
    projectId: "eventos-c887c",
    storageBucket: "eventos-c887c.appspot.com",
    messagingSenderId: "740232120082",
    appId: "1:740232120082:web:03ccfb15bdbbf8f15415cb"
  };

  
// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };