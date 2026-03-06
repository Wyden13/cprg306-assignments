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
        className="flex flex-col bg-retroblue text-retroText p-4 rounded-lg shadow-md w-full mx-auto"
        >
        <div className="mb-4 w-full flex">
         <label htmlFor="name">Name:</label>
        <input
            className="ml-4 flex-1 bg-white rounded h-10 px-2"
            type="text"
            id="name"
            value={item.name}
            required
            onChange={handleChange}
        />

        </div>

        <div className="mb-4 w-full flex flex-row">
            <div className="flex-1">
                <label htmlFor="quantity">Quantity:</label>
                <input
                type="number"
                id="quantity"
                value={item.quantity}
                className="ml-4 flex-1 bg-white rounded h-10 px-2"
                min="1"
                max="99"
                required
                onChange={handleChange}
                />
            </div>
            <div className="flex-1">
                <select
                    id="category"
                    value={item.category}
                    placeholder="Select category"
                    opaque="0.5"
                    className="ml-4 bg-white rounded h-10"
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
        className="shadow-lg shadow-[6px_6px_0px_#000] bg-retroBtn text-retroText py-2 px-4 rounded active:translate-x-1 active:translate-y-1 active:shadow-none transition">
            Add Item +
        </button>
    </form>
    )
}
