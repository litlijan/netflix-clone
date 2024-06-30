import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBrL5WyNO_NZrczPMhUMgDWH21sD9fg_m0",
  authDomain: "netflix-clone-a7ccc.firebaseapp.com",
  projectId: "netflix-clone-a7ccc",
  storageBucket: "netflix-clone-a7ccc.appspot.com",
  messagingSenderId: "840689941155",
  appId: "1:840689941155:web:b08e723e49668687e69d16"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout };
