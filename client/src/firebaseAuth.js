import {
  getAuth,
  sendSignInLinkToEmail,
  GoogleAuthProvider,
  signInWithEmailLink,
  isSignInWithEmailLink,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaMhPiYEtQ0r4YTA2HNiKS7OCvLupALb8",
  authDomain: "ecommerce-ee7f1.firebaseapp.com",
  projectId: "ecommerce-ee7f1",
  storageBucket: "ecommerce-ee7f1.appspot.com",
  messagingSenderId: "882268618405",
  appId: "1:882268618405:web:c2f7b0360b66d8269b174c"
};

// Initialize Firebase
  const app=initializeApp(firebaseConfig);

  //export
   const auth = getAuth(app);
   const googleAuthProvider = new GoogleAuthProvider();
   

   export { auth, signOut,sendPasswordResetEmail, googleAuthProvider,signInWithPopup, sendSignInLinkToEmail, signInWithEmailLink, isSignInWithEmailLink ,signInWithEmailAndPassword,createUserWithEmailAndPassword };
  
  
  