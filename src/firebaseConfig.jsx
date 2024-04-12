import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJAFiQuZXCfUYVy2ka_yLieTfioMPZ1D4",
  authDomain: "sign-system-950a4.firebaseapp.com",
  projectId: "sign-system-950a4",
  storageBucket: "sign-system-950a4.appspot.com",
  messagingSenderId: "262852952094",
  appId: "1:262852952094:web:e7b4bf4904be0597ae2e0f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)