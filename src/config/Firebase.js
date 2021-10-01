// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,updateProfile,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection, addDoc,doc,setDoc,getDoc, query, orderBy, limit  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxg6wukq9spBjuy0AW2yVeMJr3PUVAHLM",
  authDomain: "react-portfolio-app-2e5c1.firebaseapp.com",
  projectId: "react-portfolio-app-2e5c1",
  storageBucket: "react-portfolio-app-2e5c1.appspot.com",
  messagingSenderId: "417509443731",
  appId: "1:417509443731:web:b4a4887ac6d3a3829da566",
  measurementId: "G-RNJHJTRG3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export {app,auth,signOut,updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,db,setDoc,doc,collection,addDoc,getDoc, query, orderBy, limit };