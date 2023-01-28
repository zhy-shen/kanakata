import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector("body").classList.add('night-mode');
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);