import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn1nxr7_Gcs6FUoJ6t5IwgtqLKeve9P3k",
  authDomain: "portofolio-praveen-f7471.firebaseapp.com",
  projectId: "portofolio-praveen-f7471",
  storageBucket: "portofolio-praveen-f7471.firebasestorage.app",
  messagingSenderId: "514815166194",
  appId: "1:514815166194:web:38ce1277b239b0f143f26b"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };