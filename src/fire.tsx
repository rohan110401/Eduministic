import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyCkHcLRIFXuwR701XwtoE4uIVKmFlsKe4w",
    authDomain: "eduministic.firebaseapp.com",
    projectId: "eduministic",
    storageBucket: "eduministic.appspot.com",
    messagingSenderId: "576749701864",
    appId: "1:576749701864:web:ecbd4710b7d6ac8b93d75d",
    measurementId: "G-C2XYG5GH7H"
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire;