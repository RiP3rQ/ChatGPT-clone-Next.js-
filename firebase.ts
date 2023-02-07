// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UpZ-VoO7SDRFlEvisTZMZ1_sYy5g2xo",
  authDomain: "chatgpt-clone-2075a.firebaseapp.com",
  projectId: "chatgpt-clone-2075a",
  storageBucket: "chatgpt-clone-2075a.appspot.com",
  messagingSenderId: "306428285753",
  appId: "1:306428285753:web:de7529c7413fa9a97d0ee8",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
