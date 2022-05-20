import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmk-BGI8z_VqCxq13vWL9nfngPm7nnyuo",
  authDomain: "linkedin-6222a.firebaseapp.com",
  projectId: "linkedin-6222a",
  storageBucket: "linkedin-6222a.appspot.com",
  messagingSenderId: "993214341426",
  appId: "1:993214341426:web:5b63863fb617446156772b"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


export {db}