import React from "react";
import { useState } from 'react';
import bootcampers from "./bootcampers"
import "./App.css";

function App() {
  const [bootcamperIndex, setBootcamperIndex] = useState(0)
  
  function handleClick(){
    setBootcamperIndex(Math.floor(Math.random()*bootcampers.length))
  }
  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;