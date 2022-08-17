
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcd9ATqmb6ZDt-Jq6tSdooJVEbRAmw6f4",
  authDomain: "pomodoroapp-cd187.firebaseapp.com",
  projectId: "pomodoroapp-cd187",
  storageBucket: "pomodoroapp-cd187.appspot.com",
  messagingSenderId: "977255652594",
  appId: "1:977255652594:web:d96554a6899bcf7d97846b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
       

    })
    .catch((error) => {
      console.log(error);
    });
};