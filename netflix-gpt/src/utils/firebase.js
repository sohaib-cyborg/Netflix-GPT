// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo329d4PNO0a-iQjLIDMz6v3_u-3L4Lg8",
  authDomain: "netflix-gpt-2d99b.firebaseapp.com",
  projectId: "netflix-gpt-2d99b",
  storageBucket: "netflix-gpt-2d99b.appspot.com",
  messagingSenderId: "170025877436",
  appId: "1:170025877436:web:307454ffc3503ee5fdf5b9",
  measurementId: "G-2KG4HKX22R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();