import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  const handleChange = function (e) {
    setName(e.target.value);
  };

  const handleClick = function (e) {
    e.preventDefault();
    setHeading(name);
  };

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
