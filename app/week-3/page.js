import React from "react";
import ItemList from "./item-list";

function Page() {
  return (
    <div className="bg-slate-950 text-white w-5/6">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ItemList />
      </div>
    </div>
  );
}

export default Page;
