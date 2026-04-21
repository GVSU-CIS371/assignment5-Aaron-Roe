import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBApGKsvDV9jzS6D_g6T8cqdy6Ouq-jmPI",
  authDomain: "beverageshop-200f7.firebaseapp.com",
  projectId: "beverageshop-200f7",
  storageBucket: "beverageshop-200f7.firebasestorage.app",
  messagingSenderId: "971744798579",
  appId: "1:971744798579:web:35c36a3d1a2ceec50bc706"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
