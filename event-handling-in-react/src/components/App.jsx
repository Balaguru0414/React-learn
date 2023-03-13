import React, { useState } from "react";

function App() {
  const [headingText, setHandlingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  const handleClick = function () {
    setHandlingText("Submitted");
  };

  const handleMouseOver = function () {
    setMouseOver(true);
  };

  const handleMouseOut = function () {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: !isMouseOver ? "white" : "black" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
