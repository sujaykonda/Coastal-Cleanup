import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCEIyX6SyRLtwDzS-Ym2NwilQaoT5ppT48",
    authDomain: "coastalcleanup.firebaseapp.com",
    projectId: "coastalcleanup",
    storageBucket: "coastalcleanup.appspot.com",
    messagingSenderId: "258645286068",
    appId: "1:258645286068:web:d74056cdfa40a819bb0be1",
    measurementId: "G-120WLMN0RL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FirebaseInfo = { firebaseConfig: firebaseConfig, app: app, db: db };
export default FirebaseInfo;