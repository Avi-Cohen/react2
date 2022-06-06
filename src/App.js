import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Forms/Form";
import Form2 from "./components/Forms/Form2";
import Form3 from "./components/Forms/Form3";
import Form4 from "./components/Forms/Form4";
import PrintForm from "./components/PrintForm/PrintForm";

function App() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Form setUserName={setUserName} userName={userName}/>
      <Form2 setAge={setAge} />
      <button
        onClick={() => {
          setAge("");
          setUserName("");
        }}
      >
        Reset Form
      </button>
      <PrintForm userName={userName} age={age} /> */}
      {/* <Form3/>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> */}
      {/* <Form4 /> */}
      <Button />
    </div>
  );
}

export default App;
