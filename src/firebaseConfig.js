// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJlTJaFxNMFdo-1-qSm9YSqHwYxg0Ujo8",
    authDomain: "electron-react-7e490.firebaseapp.com",
    projectId: "electron-react-7e490",
    storageBucket: "electron-react-7e490.appspot.com",
    messagingSenderId: "261898550101",
    appId: "1:261898550101:web:61c429528b93939b618ddc",
    measurementId: "G-J80MVX4EK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db