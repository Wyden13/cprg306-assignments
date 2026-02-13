'use client'
import React from 'react'
import {useState} from 'react';

    
const options = ['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks', 'Household', 'Other'];

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('produce');
    function handleSubmit(e) {
        e.preventDefault();
        const newItem={
            name,
            quantity,
            category,
        };
        console.log(newItem);
        alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(0);
        setCategory('produce');
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
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
        />

        </div>

        <div className="mb-4 w-full flex flex-row">
            <div className="flex-1">
                <label htmlFor="quantity">Quantity:</label>
                <input
                type="number"
                id="quantity"
                value={quantity}
                className="ml-4 flex-1 bg-white rounded h-10 px-2"
                min="1"
                max="99"
                required
                onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="flex-1">
                <select
                    id="category"
                    value={category}
                    placeholder="Select category"
                    opaque="0.5"
                    className="ml-4 bg-white rounded h-10"
                    onChange={(e) => setCategory(e.target.value)}
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
