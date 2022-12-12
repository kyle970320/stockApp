import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDimk3zAMDEEVG9Hxet0bPfD7vZp86KyDc",
  authDomain: "stockapp-5b7c4.firebaseapp.com",
  projectId: "stockapp-5b7c4",
  storageBucket: "stockapp-5b7c4.appspot.com",
  messagingSenderId: "859785556573",
  appId: "1:859785556573:web:2bf1e1d15c3a7e216813b4",
  measurementId: "G-DB5TMYK6NW"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const fireStore = getFirestore(firebase);