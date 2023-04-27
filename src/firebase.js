// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBC-F1LdSrKo4L3lnXf-FfdFpQ5YDVjCmo",
    authDomain: "petanque-3e94b.firebaseapp.com",
    projectId: "petanque-3e94b",
    storageBucket: "petanque-3e94b.appspot.com",
    messagingSenderId: "1000842019436",
    appId: "1:1000842019436:web:881c8b9161276980c5ce49",
    measurementId: "G-WH5HDX4VQX"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;