
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZSEUJgFP22y4uj9OK81ZGpReVfxPHRNU",
  authDomain: "netflix-52711.firebaseapp.com",
  projectId: "netflix-52711",
  storageBucket: "netflix-52711.appspot.com",
  messagingSenderId: "5208647359",
  appId: "1:5208647359:web:bbd89b05d020054776880a"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {auth};

export default db;