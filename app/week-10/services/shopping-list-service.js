import { db } from "@/app/firebase/config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollection = collection(db, "users", userId, "items");
  return getDocs(itemsCollection);
}

// return the added item with its ID
export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return { id: docRef.id, ...item };
}
