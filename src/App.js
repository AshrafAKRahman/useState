import React from "react";
import { useState } from 'react';
import bootcampers from "./bootcampers"
import { excercise } from "./bootcampers"
import { compliments } from "./bootcampers";
import "./App.css";

function App() {
  const [bootcamperIndex, setBootcamperIndex] = useState(0)
  const [complimenIndex, setCompliment] = useState(0)
  const [excerciseIndex, setExcercise] = useState(0)

  function handleClick(){
    setBootcamperIndex(Math.floor(Math.random()*bootcampers.length))
    setCompliment(Math.floor(Math.random()*compliments.length))
    setExcercise(Math.floor(Math.random()*excercise.length))
  }
  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]} {compliments[complimenIndex]} {excercise[excerciseIndex]} </p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;