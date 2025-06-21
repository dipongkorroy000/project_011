import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      fetch(`http://localhost:3100/user?email=${currentUser?.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setUserData(data));
    });

    return () => unsubscribe();
  }, []);


  const authInfo = { signIn, signUp, user, logoutUser, loading, userData };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
