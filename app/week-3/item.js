import React from "react";

function Item({ params }) {
  const { name, quantity, category } = params;
  return (
    <div>
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </div>
  );
}

export default Item;
