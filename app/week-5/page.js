import React from 'react'
import NewItem from './NewItem';

export default function Page() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Week 5 - Add a New Item</h1>
      <NewItem />
    </div>
  )
}
