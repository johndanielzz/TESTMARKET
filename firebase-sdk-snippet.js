// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUtHIWT6yZ8lHVShZNdQpDEXi_M8Zuo7I",
  authDomain: "matrixmarket-f72e0.firebaseapp.com",
  databaseURL: "https://matrixmarket-f72e0-default-rtdb.firebaseio.com",
  projectId: "matrixmarket-f72e0",
  storageBucket: "matrixmarket-f72e0.firebasestorage.app",
  messagingSenderId: "16723215127",
  appId: "1:16723215127:web:ff515befb9690d4a83ad52",
  measurementId: "G-J9MHG5S3DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
