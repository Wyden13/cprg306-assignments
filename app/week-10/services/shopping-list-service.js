import { db } from "@/app/firebase/config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollection = collection(db, "users", userId, "items");
  return getDocs(itemsCollection);
}

// return the added item with its ID
export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");

  // Ensure data meets security rule requirements
  const itemData = {
    name: item.name,
    quantity: parseInt(item.quantity) || 1,
    category: item.category.toLowerCase(),
  };

  const docRef = await addDoc(itemsCollection, itemData);
  return { id: docRef.id, ...itemData };
}
