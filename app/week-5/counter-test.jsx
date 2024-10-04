"use client";
import React, { useState } from "react";

export default function CounterTest() {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
    if (quantity > 0) {
      console.log(quantity, isEnabled);
      setIsEnable(true);
    }
  };
  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity <= 2) {
      console.log(quantity);
      setIsEnable(!isEnabled);
      return;
    }
  };

  const [isEnabled, setIsEnable] = useState(false);

  return (
    <div className="p-2 ml-1 mb-1 rounded-md  bg-white text-white w-36">
      <div className="flex justify-between">
        <span className="text-black">{quantity}</span>
        <div className="flex">
          <button
            type="button"
            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => decrement()}
            disabled={!isEnabled}
          >
            -
          </button>
          <button
            type="button"
            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
            onClick={() => increment()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
