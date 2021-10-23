// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVfqkdo6_SIE2t-yYarMGR5g7Ek-SM_zE",
  authDomain: "mb-eventos-12abd.firebaseapp.com",
  projectId: "mb-eventos-12abd",
  storageBucket: "mb-eventos-12abd.appspot.com",
  messagingSenderId: "768542499606",
  appId: "1:768542499606:web:24ba3a6ee3f2e9b427a637",
  measurementId: "G-K25L62M59P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
