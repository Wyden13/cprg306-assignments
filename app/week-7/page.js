'use client'
import {useState} from "react";
import ItemList from "./item-list";
import itemsData from "./items.json"
import NewItem from "./NewItem";
export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
    };
    return (
         <main className ="p-4 max-w-xl mx-auto gap-4 flex flex-col bg-[#7AAACE] rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items = {items} />
        </main>
    );
}
