import { useState } from "react";

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState([]);

  return (
    <div className="p-4 text-white bg-[#1E1E1E] min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">Saved Items</h1>
      {savedItems.length === 0 ? (
        <p>No saved items yet.</p>
      ) : (
        savedItems.map((item, idx) => (
          <div key={idx} className="bg-[#2A2A2A] p-4 rounded-2xl mb-2">
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}