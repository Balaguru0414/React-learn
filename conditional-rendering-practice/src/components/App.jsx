import React from "react";
import Form from "./Form";

const userIsRegistered = false;

const App = function () {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
};

export default App;
