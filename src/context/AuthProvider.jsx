import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userDelete = () => {
    return deleteUser(auth.currentUser);
  };

  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        fetch(
          `https://assignment-011-server-side.vercel.app/user?email=${currentUser?.email}`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((data) => setUserData(data));
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    signIn,
    signUp,
    user,
    logoutUser,
    loading,
    userData,
    userDelete,
    googleLogin,
    searchText,
    setSearchText,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
