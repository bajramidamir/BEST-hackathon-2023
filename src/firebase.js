import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5Q5-3Dz0fFl8BjPUPrVur8roXlpJ7OXs",
    authDomain: "best-hackathon-a12b6.firebaseapp.com",
    projectId: "best-hackathon-a12b6",
    storageBucket: "best-hackathon-a12b6.appspot.com",
    messagingSenderId: "995341098048",
    appId: "1:995341098048:web:c24fc95d52b14d0e8953a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }