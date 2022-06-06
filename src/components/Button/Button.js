import React, { useEffect, useState } from "react";

const Button = () => {
  let [term, setTerm] = useState(0);
  let [term1, setTerm1] = useState("0");
  let [term2, setTerm2] = useState(0);
  console.log(term, term1, term2);
  useEffect(() => {
    console.log(
      "1) ...nothing...: I run on initial render AND after every rerender"
    );
  });

  useEffect(() => {
    console.log("2) []: I run on initial render only");
  }, []);

  useEffect(() => {
    console.log(
      "3) I run on initial render AND after every render IF term has changed since last render"
    );
  }, [term, term1, term2]);

  return <button onClick={() => setTerm1(term++)}>Click to see effect</button>;
};

export default Button;
