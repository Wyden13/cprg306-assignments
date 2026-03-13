'use client'
import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import MealListByIngredient from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    };

    const handleSelectItem = (name) => {
        let item = name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "");
        setSelectedItem(item);
    };

    return (
        <main className="min-h-screen relative overflow-hidden bg-black py-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-20 -top-20 w-96 h-96 bg-pink-600 opacity-20 rounded-full filter blur-3xl mix-blend-screen" />
                <div className="absolute right-0 top-1/3 w-80 h-80 bg-pink-500 opacity-15 rounded-full filter blur-3xl mix-blend-screen" />
                <div className="absolute left-1/2 bottom-0 w-[600px] h-[400px] -translate-x-1/2 bg-gradient-to-t from-pink-600 to-transparent opacity-5 rounded-3xl filter blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
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
                                <h2 className="text-2xl font-semibold text-white">Add an item</h2>
                                <div className="text-sm text-gray-400">Keep it simple</div>
                            </div>
                            <div className="mt-5">
                                <NewItem onAddItem={handleAddItem} />
                            </div>
                        </section>

                        <section className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold text-white">Your items</h2>
                                <div className="text-sm text-gray-400">Click to select</div>
                            </div>
                            <div className="mt-5">
                                <ItemList items={items} onSelectItem={handleSelectItem} />
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-5">
                        <div className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
                            <h3 className="text-lg font-semibold text-pink-400 mb-3">Selected item</h3>
                            {selectedItem ? (
                                <div className="mt-2 p-4 rounded-lg bg-pink-600/20 border border-pink-500/50 shadow-lg shadow-pink-600/30">
                                    <p className="font-bold text-2xl text-pink-300">{selectedItem}</p>
                                    <p className="text-sm text-gray-300 mt-2">↓ See recipe ideas below</p>
                                </div>
                            ) : (
                                <p className="text-gray-400 mt-2">No item selected yet</p>
                            )}
                        </div>

                        <div className="p-6 rounded-lg bg-gray-900/60 border border-pink-600/30 shadow-lg">
                            <h3 className="text-lg font-semibold text-pink-400 mb-3">Meal ideas</h3>
                            <p className="text-sm text-gray-400 mb-3">From TheMealDB</p>
                            <MealListByIngredient ingredient={selectedItem} />
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
