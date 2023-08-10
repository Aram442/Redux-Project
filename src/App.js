import React, { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  // useSelector alows us to extract all things in Redux
  return (
    <div className="App">
      <h1>Counter:{counter}</h1> 
      {/* for example in here we extract counter values form the counter. */}
      <button>Increment </button>
    </div>
  );
}

export default App;
