import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector("body").classList.add('night-mode');
}
      
if (parseFloat(window.getComputedStyle(document.body).getPropertyValue('--l')) > 60 ) {
  document.querySelector("body").classList.add('light')
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);