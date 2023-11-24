// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCa3LjFHEbWGYmUyNsOIy0u1dtAaKkqzHA",
//     authDomain: "disney-plus-hotstar-clon-39f80.firebaseapp.com",
//     projectId: "disney-plus-hotstar-clon-39f80",
//     storageBucket: "disney-plus-hotstar-clon-39f80.appspot.com",
//     messagingSenderId: "202782658940",
//     appId: "1:202782658940:web:0325d6679b7d02d0a454f9"
//   };


//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();

//   export { auth, provider, storage };
//   export default db;



import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3LjFHEbWGYmUyNsOIy0u1dtAaKkqzHA",
  authDomain: "disney-plus-hotstar-clon-39f80.firebaseapp.com",
  projectId: "disney-plus-hotstar-clon-39f80",
  storageBucket: "disney-plus-hotstar-clon-39f80.appspot.com",
  messagingSenderId: "202782658940",
  appId: "1:202782658940:web:0325d6679b7d02d0a454f9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
