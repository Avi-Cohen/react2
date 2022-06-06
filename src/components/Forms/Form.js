import React, { useState } from "react";

const Form = ({ setUserName, userName }) => {
  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={(e) => {
          let input = e.target.parentElement.children[0];
          setUserName(input.value);
          input.value = "";
          //   input.style.background = "green";
        }}
      >
        Print user
      </button>
    </>
  );
};

export default Form;
