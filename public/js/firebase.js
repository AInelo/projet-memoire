// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// const firebase = require('firebase/app');


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtnStllYmXV-RYYAoL70hdqBJUaxsgHQc",
//   authDomain: "seiorg-14f72.firebaseapp.com",
//   projectId: "seiorg-14f72",
//   storageBucket: "seiorg-14f72.appspot.com",
//   messagingSenderId: "148814749726",
//   appId: "1:148814749726:web:06fcc1b519988c87fa8e0f"
// };

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);


let firebaseConfig = {
  apiKey: "AIzaSyCtnStllYmXV-RYYAoL70hdqBJUaxsgHQc",
  authDomain: "seiorg-14f72.firebaseapp.com",
  projectId: "seiorg-14f72",
  storageBucket: "seiorg-14f72.appspot.com",
  messagingSenderId: "148814749726",
  appId: "1:148814749726:web:06fcc1b519988c87fa8e0f"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
