import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAV2MDcNqagz59TvPgPQPfk0A7n2NBqxtA",
  authDomain: "clone-83424.firebaseapp.com",
  projectId: "clone-83424",
  storageBucket: "clone-83424.appspot.com",
  messagingSenderId: "937619223309",
  appId: "1:937619223309:web:b4d87ba8762c267d4d7644",
  measurementId: "G-4LTKPE1EQ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
