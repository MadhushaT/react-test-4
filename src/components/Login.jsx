import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="Confirm password" />
      <button type="submit">
        {isRegistered === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
