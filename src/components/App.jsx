import React from "react";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Login isRegistered={userIsRegistered} />
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
    </div>
  );
}

export default App;
