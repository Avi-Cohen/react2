import { useState } from "react";
import "./App.css";
import Form from "./components/Forms/Form";
import Form2 from "./components/Forms/Form2";
import Form3 from "./components/Forms/Form3";
import PrintForm from "./components/PrintForm/PrintForm";

function App() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

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
      <Form3/>
    </div>
  );
}

export default App;
