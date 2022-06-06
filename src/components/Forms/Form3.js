import React, { useState } from "react";
import PrintForm from "../PrintForm/PrintForm";

const Form3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  console.log(inputValue);
  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          placeholder={"enter value"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="button" value="Click" onClick={() => setIsClicked(true)} />
      </form>
      {isClicked ? (
        <PrintForm userName={inputValue} />
      ) : (
        <div>press click to see results</div>
      )}
    </>
  );
};

export default Form3;
