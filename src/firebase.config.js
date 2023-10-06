// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4qUX1iIHKNxRfuMZcyM4FpbHog_F8wFQ",
    authDomain: "auth-moha-milon-6fe47.firebaseapp.com",
    projectId: "auth-moha-milon-6fe47",
    storageBucket: "auth-moha-milon-6fe47.appspot.com",
    messagingSenderId: "957781924702",
    appId: "1:957781924702:web:b4e0aaffcba0713ccf4dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;