// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";

import "firebase/auth"
import "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVfqkdo6_SIE2t-yYarMGR5g7Ek-SM_zE",
  authDomain: "mb-eventos-12abd.firebaseapp.com",
  projectId: "mb-eventos-12abd",
  storageBucket: "mb-eventos-12abd.appspot.com",
  messagingSenderId: "768542499606",
  appId: "1:768542499606:web:24ba3a6ee3f2e9b427a637",
  measurementId: "G-K25L62M59P"
};

const firebaseapp = initializeApp(firebaseConfig)


export default function install(Vue) {
  Object.defineProperty(Vue.prototype, "$firebase", {
    get() {
      return firebaseapp
    }
  })
}
