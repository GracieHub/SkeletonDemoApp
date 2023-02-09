// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged } from 'firebase/auth;'
import {getFirestore, collection, getDocs, getDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBOVAoXlNptuOrW3MCMMBZ2z6gOPmA81Q8",
  authDomain: "grace-skeleton-app.firebaseapp.com",
  projectId: "grace-skeleton-app",
  storageBucket: "grace-skeleton-app.appspot.com",
  messagingSenderId: "493659735778",
  appId: "1:493659735778:web:91fcd979e50ff604c0c0bb",
  measurementId: "G-BP2KYCY36D"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

/*Detect auth state
onAuthStateChanged(auth, user => {
    if(user ≠ null){
        console.log('logged in');
    } else {
        console.log('no user');
    }
}); */