import React, { useRef } from "react";

const Form2 = ({ setAge }) => {
  const inputNumberEl = useRef(null);
  console.log(inputNumberEl);
  return (
    <>
      <span>span</span>
      <input ref={inputNumberEl} type="number" />
      <button
        onClick={(e) => {
          const { current } = inputNumberEl;
          //   console.log(e.target.nodeName);
          //   let input = e.target.parentElement.children[0];
          //   console.log(e.target.parentElement);
          //   console.log(current.value);
          setAge(current.value);
          current.value = "";
          //   input.style.background = "green";
        }}
      >
        Print user
      </button>
    </>
  );
};

export default Form2;
