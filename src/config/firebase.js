import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1guKGc2ErKKV9iDpmxhlDO3CRKjd0N1g",
  authDomain: "blog-app-5b89f.firebaseapp.com",
  projectId: "blog-app-5b89f",
  storageBucket: "blog-app-5b89f.firebasestorage.app",
  messagingSenderId: "1015182445003",
  appId: "1:1015182445003:web:e9695df6ec8a9c2ca20e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth