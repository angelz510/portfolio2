import React from "react";
import Nav from "./components/Nav/Nav";
import routes from "./config/routes";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app-container">{routes}</div>
    </div>
  );
}

export default App;
