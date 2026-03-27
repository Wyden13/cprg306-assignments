"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onSelectItem }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [item, setItem] = useState(null);
  const sortedItems = sortItems(items, sortBy);

  function sortItems(items, sortBy) {
    return [...items].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  }

  function handleGroupByCategory(items) {
    const map = {};
    for (const item of items) {
      if (!map[item.category.toLowerCase()]) {
        map[item.category.toLowerCase()] = [];
      }
      map[item.category.toLowerCase()].push(item);
    }
    return map;
  }

  return (
    <div>
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
            sortBy === "name"
              ? "bg-pink-600 text-white shadow-lg shadow-pink-600/50"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
            sortBy === "category"
              ? "bg-pink-600 text-white shadow-lg shadow-pink-600/50"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
          }`}
        >
          Category
        </button>
        <button
          onClick={() =>
            setGroupByCategory((groupByCategory) => !groupByCategory)
          }
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
            groupByCategory
              ? "bg-pink-600 text-white shadow-lg shadow-pink-600/50"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
          }`}
        >
          Group
        </button>
      </div>
      {groupByCategory ? (
        <div className="space-y-6">
          {Object.entries(handleGroupByCategory(items)).map(
            ([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-3 capitalize text-pink-400 border-l-4 border-pink-600 pl-3">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <Item key={item.id} {...item} onSelect={onSelectItem} />
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={onSelectItem} />
          ))}
        </ul>
      )}
    </div>
  );
}
