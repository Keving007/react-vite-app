// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiYCZHuR-OmHtLYTXcDmX46SPZWhKhqt0",
  authDomain: "react-vite-app-1a00b.firebaseapp.com",
  projectId: "react-vite-app-1a00b",
  storageBucket: "react-vite-app-1a00b.appspot.com",
  messagingSenderId: "373016515046",
  appId: "1:373016515046:web:50a52f6c26f47e4d2d0627",
  measurementId: "G-8GFVRLV275"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;