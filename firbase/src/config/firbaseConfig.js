// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB59LLSGHDrCEKN3L4TYgZrdKIdx5Ptlfs",
  authDomain: "harshvardhan-6d32a.firebaseapp.com",
  projectId: "harshvardhan-6d32a",
  storageBucket: "harshvardhan-6d32a.appspot.com",
  messagingSenderId: "338260269647",
  appId: "1:338260269647:web:5c38a77c0fe9a4cf89a83a"
};

// Initialize Firebase
const hvs = initializeApp(firebaseConfig);
export default hvs;