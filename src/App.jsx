import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SpeechBox from "./components/SpeechBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="heading">Speech to Text Converter</h1>
      <p className="subtitle">
        A React hook that converts speech from micorphone to text and makes it
        available to your React Components
      </p>
      <SpeechBox />
    </div>
  );
}

export default App;
