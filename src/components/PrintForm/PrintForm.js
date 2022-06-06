import React from "react";

const PrintForm = ({ userName, age }) => {
  console.log("userName", userName);
  console.log("age", age);
  return (
    <div>
      values are {userName}
      {age}
    </div>
  );
};

export default PrintForm;
