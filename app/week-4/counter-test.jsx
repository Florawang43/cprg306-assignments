"use client";
import React, { useState } from "react";

export default function CounterTest() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
    if (count > 0) {
      console.log(count, isEnabled);
      setIsEnable(true);
    }
  };
  const decrement = () => {
    setCount(count - 1);
    if (count <= 2) {
      console.log(count);
      setIsEnable(!isEnabled);
      return;
    }
  };

  const [isEnabled, setIsEnable] = useState(false);

  return (
    <div className="p-2 m-4 bg-white text-white w-36">
      <div className="flex justify-between">
        <span className="text-black">{count}</span>
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
