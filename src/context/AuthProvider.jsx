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
import axios from "axios";

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

      if (currentUser?.email) {
        axios
          .post(
            "https://assignment-011-server-side.vercel.app/jwt",
            { email: currentUser.email },
            {
              withCredentials: true,
            }
          )
          .then(() => {
            axios
              .get(`https://assignment-011-server-side.vercel.app/user?email=${currentUser?.email}`, {
                withCredentials: true,
              })
              .then((res) => setUserData(res.data));
          });
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
