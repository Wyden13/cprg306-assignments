import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "@/app/firebase/config";

export async function signUpWithEmailAndPassword(email, password) {
  try {
    if (!auth) {
      return { user: null, error: "Firebase is not initialized. Please check your environment variables." };
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function loginWithEmailAndPassword(email, password) {
  try {
    if (!auth) {
      return { user: null, error: "Firebase is not initialized. Please check your environment variables." };
    }
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function logout() {
  try {
    if (!auth) {
      return { error: "Firebase is not initialized. Please check your environment variables." };
    }
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
}
