import React, { useState } from "react";
const arr = [
  {
    isKosher: true,
    itemName: "Kosher 1",
  },
  {
    isKosher: false,
    itemName: "No Kosher 1",
  },
  {
    isKosher: false,
    itemName: "No Kosher 2",
  },
  {
    isKosher: true,
    itemName: "Kosher 2",
  },
];

const Form4 = () => {
  const [category, setCagtegory] = useState("");
  const [items, setItems] = useState(arr);
  console.log(items);
  return (
    <div>
      <input
        type="text"
        placeholder="enter category"
        onChange={(e) => setCagtegory(e.target.value)}
        value={category}
      />
      <button>Search</button>
      <div>{category}</div>
      <button onClick={() => setItems(arr.filter((item) => item.isKosher))}>
        Kosher
      </button>
      <button onClick={() => setItems(arr.filter((item) => !item.isKosher))}>
        Not Kosher
      </button>
      <div>
        {items.map((item) => (
          <>
            <div>{item.itemName}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Form4;
