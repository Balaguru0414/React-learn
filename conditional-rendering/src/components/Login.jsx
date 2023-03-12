import React from "react";
import Input from "./Input";

const Login = function () {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
