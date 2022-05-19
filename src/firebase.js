// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3QUzgGYWq-EKtI4C6GLSRwMVgrFLnHzU",
    authDomain: "react-fb-auth-2381b.firebaseapp.com",
    projectId: "react-fb-auth-2381b",
    storageBucket: "react-fb-auth-2381b.appspot.com",
    messagingSenderId: "864571985320",
    appId: "1:864571985320:web:658a806459e4ae8c95e19d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 