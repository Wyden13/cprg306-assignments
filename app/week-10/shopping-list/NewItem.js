'use client'
import React from 'react'
import {useState} from 'react';

    
const options = ['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks', 'Household', 'Other'];

export default function NewItem({onAddItem}) {
    const [item, setItem] = useState({
    name: "",
    quantity: 1,
    category: "produce",
    });
    const initialState = { name: "", quantity: 1, category: "produce" };

    function handleSubmit(e) {
        e.preventDefault();
        const newItem={...item, id:crypto.randomUUID()}
        console.log(newItem);
        onAddItem(newItem);
        // alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
       setItem(initialState);
    } 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem((prev)=>({...prev,  [name]: value}));
    }
    return (
    <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 p-5 rounded-lg bg-gray-800/50 border border-gray-700"
        >
        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white font-semibold text-sm">Item Name</label>
            <input
                className="px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-600 focus:shadow-lg focus:shadow-pink-600/30 transition-all"
                type="text"
                id="name"
                name="name"
                placeholder="e.g., Carrots"
                value={item.name}
                required
                onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="text-white font-semibold text-sm">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    value={item.quantity}
                    name="quantity"
                    className="px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-pink-600 focus:shadow-lg focus:shadow-pink-600/30 transition-all"
                    min="1"
                    max="99"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-white font-semibold text-sm">Category</label>
                <select
                    id="category"
                    value={item.category}
                    className="px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-pink-600 focus:shadow-lg focus:shadow-pink-600/30 transition-all"
                    name="category"
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <button 
            type="submit"
            className="py-2 px-4 rounded-lg font-semibold bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/50 transition-all duration-200">
            + Add Item
        </button>
    </form>
    )
}
