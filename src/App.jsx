import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChangeText = (e) => {
    setValue(e.target.value);
  };
  const handleShowText = () => {
    document.getElementById("resultText").innerText = value.toLocaleUpperCase();
    setValue("");
  };
  return (
    <div className="container">
      <div>
        <input
          className="input"
          value={value}
          type="text"
          onChange={handleChangeText}
        />
        <button onClick={handleShowText}>Добавить</button>
      </div>
      <p id="resultText"></p>
    </div>
  );
}

export default App;
