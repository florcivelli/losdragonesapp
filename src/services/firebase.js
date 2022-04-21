
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbXZsDYfwKP2rjQ7O6jRAnelxUCftyaek",
  authDomain: "losdragonesapp.firebaseapp.com",
  projectId: "losdragonesapp",
  storageBucket: "losdragonesapp.appspot.com",
  messagingSenderId: "10984464573",
  appId: "1:10984464573:web:f87af2bf4672529b7e97d4"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)