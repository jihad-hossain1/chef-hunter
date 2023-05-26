import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
// import app from "../firebase/firebase.config";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [chefData, setChefData] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const loginEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    fetch(
      "https://foodie-crush-hunter-server-jihad-hossain1.vercel.app/chefdata"
    )
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsuscribe();
    };
  }, []);
  const authInfo = {
    user,
    logOut,
    loading,
    loginEmail,
    createUser,
    loginWithGithub,
    loginWithGoogle,
    chefData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
