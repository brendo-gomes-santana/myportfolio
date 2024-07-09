const { 
    REACT_APP_API_KEY,
    REACT_APP_AUTHDOMANIN,
    REACT_APP_PROJECTID,
    REACT_APP_STORAGEBUCKET,
    REACT_APP_MESSAGINGSENDERID,
    REACT_APP_APPID
 } = process.env

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTHDOMANIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);

const { db } = getAuth(app);
const { auth } = getFirestore(app);

export { db, auth }