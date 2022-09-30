import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAnTfb1YHxnomDmKqtgXA6Xfg9ULSEiVC8",
    authDomain: "e-ride-3780d.firebaseapp.com",
    databaseURL: "https://e-ride-3780d-default-rtdb.firebaseio.com",
    projectId: "e-ride-3780d",
    storageBucket: "e-ride-3780d.appspot.com",
    messagingSenderId: "520981976098",
    appId: "1:520981976098:web:e610846ab21ec10c05a67b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
