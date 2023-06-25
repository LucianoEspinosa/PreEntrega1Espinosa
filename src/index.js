import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzq1YMmk1KGBAVB6JU7Yl9T2OJUE1XDd4",
    authDomain: "fragancesnet.firebaseapp.com",
    projectId: "fragancesnet",
    storageBucket: "fragancesnet.appspot.com",
    messagingSenderId: "10863367691",
    appId: "1:10863367691:web:16d834616cdc2b996a190e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


