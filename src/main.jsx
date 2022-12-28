import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDsnaOl-R-Gg21SULcQLTn1T8kOFui98",
  authDomain: "central-run-359818.firebaseapp.com",
  projectId: "central-run-359818",
  storageBucket: "central-run-359818.appspot.com",
  messagingSenderId: "619024204306",
  appId: "1:619024204306:web:38a0d09e83665a27968ecb",
  measurementId: "G-N225BYS7EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
