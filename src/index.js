import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGa9vgP0HnNkK1ntENgAvpGoLZfzbHv00",
  authDomain: "proyecto-final-react-26ed3.firebaseapp.com",
  projectId: "proyecto-final-react-26ed3",
  storageBucket: "proyecto-final-react-26ed3.appspot.com",
  messagingSenderId: "899770220960",
  appId: "1:899770220960:web:b5e79c5dd05b4a2746e4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
