    'use client';
    import Item from "./item";
    import { useState } from "react";

    export default function ItemList({ items }) {
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
            for (const item of items){
                if(!map[item.category.toLowerCase()]){
                    map[item.category.toLowerCase()] = [];
                }
                map[item.category.toLowerCase()].push(item);
            }
            return map;
        }
    
        return (
            <div>
                <div className="mb-4">
                    <button onClick ={()=>setSortBy("name")} className={`mr-2 px-4 py-2 rounded bg-[#C00707]  ${sortBy === "name" ? "font-bold text-[#FFD150]" : "text-white"}`}>Name</button>
                    <button onClick={() => setSortBy("category")} className={`ml-2 px-4 py-2 rounded bg-[#134E8E]  ${sortBy === "category" ? "font-bold text-[#FFD150]" : "text-white"}`}>Category</button>
                    <button onClick={() => setGroupByCategory(groupByCategory => !groupByCategory)} className={`ml-2 px-4 py-2 rounded bg-[#FFD150] ${groupByCategory ? "font-bold text-[#C00707]" : "text-white"}`}>Group by Category</button>
                </div>
                {groupByCategory ? (
                    Object.entries(handleGroupByCategory(items)).map(([category, items]) => {
                        return (
                            <div key={category}>
                                <h3 className="text-lg font-bold mb-2">{category}</h3>
                                <ul>
                                {items.map(item => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </div>
                    );
                })) : (
                    <ul>
                        {sortedItems.map(item => (
                            <Item key={item.id} {...item} />
                        ))}
                    </ul>
                )}
            </div>
        
        );
    }
