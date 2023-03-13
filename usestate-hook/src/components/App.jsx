import React from "react";

const App = function () {
  const [count, setCount] = React.useState(0);

  const increase = function () {
    setCount(count + 1);
  };
  const decrease = function () {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default App;
