"use client";

import React, { useState } from "react";
import Item from "./item";
import shoppinglist from "./items.json";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [shoppingList, setShoppingList] = useState(
    [...shoppinglist].sort((a, b) => a.name.localeCompare(b.name))
  );

  const [shoppingDict, setShoppingDict] = useState({});

  const handleSortBy = () => {
    console.log("handleSortBy" + sortBy);

    const sortedShoppingList = [...shoppingList];
    if (sortBy === "name") {
      sortedShoppingList.sort((a, b) => b.name.localeCompare(a.name));
      setShoppingList(sortedShoppingList);
    } else if (sortBy === "category") {
      console.log("sort category");

      sortedShoppingList.sort((a, b) => a.category.localeCompare(b.category));
      setShoppingList(sortedShoppingList);
    } else if (sortBy === "grouped") {
      handleGroupList();
    }
  };

  const handleBtnClick = (sortby) => {
    setShoppingDict({});
    setSortBy(sortby);
    handleSortBy();
  };

  const handleGroupList = () => {
    console.log("handleGroupList");
    let sortedShoppingList = [...shoppingList];
    let shoppingDict = sortedShoppingList.reduce((newDict, item) => {
      if (!newDict[item.category]) {
        newDict[item.category] = [];
      }
      newDict[item.category].push(item);
      console.log(newDict);
      return newDict;
    }, {});
    console.log(shoppingDict);
    setShoppingDict(shoppingDict);
    console.log(shoppingDict);
  };

  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <div>
        <labale>Sort by: </labale>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => handleBtnClick("name")}
        >
          Name
        </button>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => handleBtnClick("category")}
        >
          Category
        </button>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => handleGroupList()}
        >
          Grouped Category
        </button>
      </div>
      <div>
        {Object.keys(shoppingDict).length !== 0
          ? Object.keys(shoppingDict).map((category) => {
              return (
                <div key={category}>
                  <h3 className="capitalize text-xl">{category}</h3>
                  <ul>
                    {shoppingDict[category].map((item) => {
                      return <Item params={item} />;
                    })}
                  </ul>
                </div>
              );
            })
          : shoppingList.map((item) => {
              return (
                <div key={item.id}>
                  <h3 className="capitalize text-xl">{item.category}</h3>
                  <ul>
                    <Item params={item} />
                  </ul>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ItemList;
