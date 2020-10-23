import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App m-auto sm:container sm:px-6 pt-2 sm:pt-5">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
