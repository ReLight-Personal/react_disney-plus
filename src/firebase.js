// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSx8-E0XfXytryVC3T9_LBs_drUwO1oM",
  authDomain: "disney-plus-app-61c80.firebaseapp.com",
  projectId: "disney-plus-app-61c80",
  storageBucket: "disney-plus-app-61c80.appspot.com",
  messagingSenderId: "511942078016",
  appId: "1:511942078016:web:5675015dd024540533f9a5",
  measurementId: "G-6EQFK2JCB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
