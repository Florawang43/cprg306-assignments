"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item.js";

import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-950">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

export default Page;
