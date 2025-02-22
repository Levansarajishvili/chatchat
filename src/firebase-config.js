// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyBw8kPQkxNvVY2cB6ghVc20FlxhP4e_Xs4",
//   authDomain: "testproj-531d7.firebaseapp.com",
//   projectId: "testproj-531d7",
//   storageBucket: "testproj-531d7.appspot.com",
//   messagingSenderId: "705585244276",
//   appId: "1:705585244276:web:6905459d1c0800f7ba0921",
//   measurementId: "G-KWJSWQRNV0"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDTltrpa7nMcBbXUruqcrfSJprB1xchhFs",
  authDomain: "chatapp-6ad0e.firebaseapp.com",
  projectId: "chatapp-6ad0e",
  storageBucket: "chatapp-6ad0e.appspot.com",
  messagingSenderId: "809324404070",
  appId: "1:809324404070:web:e20df6d44733d5818cbca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();