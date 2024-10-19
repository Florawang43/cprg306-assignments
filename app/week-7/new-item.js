"use client";

import React, { useState } from "react";

function NewItem({ onAddItem }) {
  const categoryData = [
    { value: "produce", display: "Produce" },
    { value: "Dairy", display: "Dairy" },
    { value: "Bakery", display: "Bakery" },
    { value: "Meat", display: "Meat" },
    { value: "Frozen Foods", display: "Frozen Foods" },
    { value: "Canned Goods", display: "Canned Goods" },
    { value: "Dry Goods", display: "Dry Goods" },
    { value: "Beverages", display: "Beverages" },
    { value: "Snacks", display: "Snacks" },
    { value: "Household", display: "Household" },
    { value: "Other", display: "Other" },
  ];

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [isEnabled, setIsEnable] = useState(false);

  const resetData = () => {
    setQuantity(1);
    setName("");
    setCategory("produce");
    setIsEnable(false);
  };

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      ); // Corrected line
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = generateRandomString(18);
    let item = { id: id, name: name, quantity: quantity, category: category };
    onAddItem(item);
    resetData();
  };

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

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

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={name}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
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
        <select
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={category}
          onChange={handleChangeSelect}
        >
          <option value disabled>
            Category
          </option>
          {categoryData.map((item) => {
            return (
              <option value={item.value} key={item.display}>
                {item.display}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}

export default NewItem;
