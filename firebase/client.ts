import { initializeApp,getApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy6aAvD-Ygc_NotGuoUiKKVqQzzmIEuGI",
  authDomain: "intervue-bf27b.firebaseapp.com",
  projectId: "intervue-bf27b",
  storageBucket: "intervue-bf27b.firebasestorage.app",
  messagingSenderId: "785887394062",
  appId: "1:785887394062:web:add0bb9ea922096f30bf5f",
  measurementId: "G-JJJ0S2GCNC"
}

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)