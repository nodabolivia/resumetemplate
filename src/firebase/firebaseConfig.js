// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREASE_apiKey ,
  authDomain: process.env.REACT_APP_FIREASE_authDomain ,
  projectId: process.env.REACT_APP_FIREASE_projectId ,
  storageBucket: process.env.REACT_APP_FIREASE_projectId  ,
  messagingSenderId: process.env.REACT_APP_FIREASE_messagingSenderId  ,
  appId: process.env.REACT_APP_FIREASE_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const auth = firebase.auth();
export default firebase;
export default db;
export default auth;