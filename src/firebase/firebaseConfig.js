import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjs7D_pYMgHlnh503xldXzyHIIb5qA7yw",
  authDomain: "application-fcd81.firebaseapp.com",
  projectId: "application-fcd81",
  storageBucket: "application-fcd81.firebasestorage.app",
  messagingSenderId: "526283614893",
  appId: "1:526283614893:web:aeb45fa633d74b8c3e3424",
  measurementId: "G-K41671PC7V",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
