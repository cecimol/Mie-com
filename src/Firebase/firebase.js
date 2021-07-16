import firebase from "firebase/app";
import 'firebase/firestore'
  
const firebaseConfig = {
  apiKey: "AIzaSyDeO6MHawf2u6eb5f3AZ89KX0mVS0T2NPs",
  authDomain: "miproyecto-f254d.firebaseapp.com",
  projectId: "miproyecto-f254d",
  storageBucket: "miproyecto-f254d.appspot.com",
  messagingSenderId: "414021040004",
  appId: "1:414021040004:web:8e8e459887f1a8eadecfd1"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();