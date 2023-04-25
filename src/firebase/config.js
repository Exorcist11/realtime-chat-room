import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBacqlHX-5UJL-Aet6Eava_p6aFnjgNDLI",
  authDomain: "chat-room-2f7eb.firebaseapp.com",
  projectId: "chat-room-2f7eb",
  storageBucket: "chat-room-2f7eb.appspot.com",
  messagingSenderId: "972012421275",
  appId: "1:972012421275:web:64dbfe5054b2b80786063e",
  measurementId: "G-GSRY64BZ70",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
