import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfHOBgofOnCXCznz1QsAiIbTWqtOiexWE",
  authDomain: "financely-rec-ac0b6.firebaseapp.com",
  projectId: "financely-rec-ac0b6",
  storageBucket: "financely-rec-ac0b6.appspot.com",
  messagingSenderId: "1071658141456",
  appId: "1:1071658141456:web:a9e3a39a34c9758bac0795",
  measurementId: "G-TEZ8ET55DH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

