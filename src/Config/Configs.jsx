// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCBnE8851px38rQUs8RpHkTgU48fUzPg",
  authDomain: "web-app-ad6cb.firebaseapp.com",
  projectId: "web-app-ad6cb",
  storageBucket: "web-app-ad6cb.appspot.com",
  messagingSenderId: "661463558668",
  appId: "1:661463558668:web:2fce31f00431db59bddc29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);