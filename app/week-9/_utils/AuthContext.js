"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/app/firebase/config";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // GitHub Sign-In function
  const gitHubSignIn = () => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      throw new Error("Firebase is not initialized. Please check your environment variables.");
    }
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Firebase Sign-Out function
  const firebaseSignOut = () => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      throw new Error("Firebase is not initialized. Please check your environment variables.");
    }
    return signOut(auth);
  };
  // Listen for authentication state changes
  useEffect(() => {
    // If auth is not initialized, set loading to false and return
    if (!auth) {
      console.warn("Firebase auth is not initialized");
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("User Authenticated: ", user.email);
        } else {
          console.log("No User Found");
        }
        setAuthUser(user);
        setLoading(false);
        console.log("loading complete");
      },
      (error) => {
        console.error("Auth error", error);
        setAuthUser(null);
        setLoading(false);
      },
    );

    return () => {
      console.log("Cleaning up listener");
      unsubscribe();
    };
  }, []);


  return (
    <AuthContext.Provider value={{ user: authUser, loading, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
