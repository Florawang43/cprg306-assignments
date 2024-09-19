import React from "react";
import ItemList from "./item-list";

function Page() {
  return (
    <div className="bg-slate-950 text-white">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
    </div>
  );
}

export default Page;
