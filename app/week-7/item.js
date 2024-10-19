import React from "react";

function Item({ params }) {
  const { name, quantity, category } = params;
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm test-white">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}

export default Item;
