import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6I2pIUSYGwFwmri3QXPT-nKfPFfxy6Vg",
  authDomain: "nexcart-marketplace.firebaseapp.com",
  projectId: "nexcart-marketplace",
  storageBucket: "nexcart-marketplace.appspot.com",
  messagingSenderId: "504969305816",
  appId: "1:504969305816:web:4abb66673989f559d181ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app, createUserWithEmailAndPassword, addDoc, collection };
