"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
// import itemsData from "./items.json";
import NewItem from "./NewItem";
import MealListByIngredient from "./meal-ideas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getItems, addItem } from "../services/shopping-list-service";

export default function Page() {
  const router = useRouter();
  //   const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);
  const { user, loading, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);

  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/week-10");
    }
  }, [user, loading, router]);

  // Load items from Firestore when the component mounts
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    try {
      const querySnapshot = await getItems(user.uid);
      const itemsList = [];
      querySnapshot.forEach((doc) => {
        itemsList.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsList);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    const addedItem = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, addedItem]);
  };

  const handleSelectItem = (name) => {
    let item = name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "",
      );
    setSelectedItem(item);
  };

  // Show loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
      </main>
    );
  }

  // Don't render anything while redirecting
  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-black py-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-pink-600 opacity-20 rounded-full filter blur-3xl mix-blend-screen" />
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-pink-500 opacity-15 rounded-full filter blur-3xl mix-blend-screen" />
        <div className="absolute left-1/2 bottom-0 w-[600px] h-[400px] -translate-x-1/2 bg-gradient-to-t from-pink-600 to-transparent opacity-5 rounded-3xl filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* User Info Header */}
        <div className="mb-8 flex items-center justify-between bg-gray-900/60 border border-pink-600/30 rounded-lg p-6">
          <div>
            <p className="text-gray-400 text-sm">Welcome,</p>
            <h2 className="text-2xl font-bold text-white">{user.email}</h2>
            {user.displayName && (
              <p className="text-pink-400 text-sm mt-1">{user.displayName}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>

        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
              Week 8 — Shopping List & Meal Ideas
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <section className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Add an item
                </h2>
                <div className="text-sm text-gray-400">Keep it simple</div>
              </div>
              <div className="mt-5">
                <NewItem onAddItem={handleAddItem} />
              </div>
            </section>

            <section className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Your items
                </h2>
                <div className="text-sm text-gray-400">Click to select</div>
              </div>
              <div className="mt-5">
                <ItemList items={items} onSelectItem={handleSelectItem} />
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">
                Selected item
              </h3>
              {selectedItem ? (
                <div className="mt-2 p-4 rounded-lg bg-pink-600/20 border border-pink-500/50 shadow-lg shadow-pink-600/30">
                  <p className="font-bold text-2xl text-pink-300">
                    {selectedItem}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    ↓ See recipe ideas below
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 mt-2">No item selected yet</p>
              )}
            </div>

            <div className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">
                Meal ideas
              </h3>
              <p className="text-sm text-gray-400 mb-3">From TheMealDB</p>
              <MealListByIngredient ingredient={selectedItem} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
