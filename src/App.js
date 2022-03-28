import React, { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setemotion] = useState("Happy");
  return (
    <>
      <div className="myApp">
        <h1>My Current emotion is {emotion}</h1>
        <button onClick={() => setemotion("frustrated")}>Frustrate</button>
        <button onClick={() => setemotion("Elated")}>Elated</button>
        <button onClick={() => setemotion("Enthusiastic")}>Enthusiastic</button>
      </div>
    </>
  );
}

export default App;
