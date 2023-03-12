import React from "react";
import Login from "./Login";

const isLoggedIn = true;

// const curTime = new Date(2023,1,1,11).getHours();

const App = function () {
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Hello User</h1> : <Login />
        // curTime < 12 && <h1>Hello</h1>
      }
    </div>
  );
};

export default App;
