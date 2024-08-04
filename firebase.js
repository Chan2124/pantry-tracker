// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClvXNURBOE-e32dwLIFLxoxuQ2ketPteA",
  authDomain: "pantry-tracker-d9c79.firebaseapp.com",
  projectId: "pantry-tracker-d9c79",
  storageBucket: "pantry-tracker-d9c79.appspot.com",
  messagingSenderId: "236406303029",
  appId: "1:236406303029:web:cc53a74b90db0530fc847c",
  measurementId: "G-N5BD9PMKLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };