import { db } from "@/app/firebase/config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollection = collection(db, "items");
  const q = query(itemsCollection, where("userId", "==", userId));
  return getDocs(q);
}

// return the added item with its ID
export async function addItem(userId, item) {
  const itemsCollection = collection(db, "items");
  const docRef = await addDoc(itemsCollection, { ...item, userId });
  return { id: docRef.id, ...item, userId };
}
