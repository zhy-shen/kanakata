import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppGlobal from "./AppGlobal";
import "./index.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector("body").classList.add('night-mode');
}
      
if (parseFloat(window.getComputedStyle(document.body).getPropertyValue('--l')) > 60 ) {
  document.querySelector("body").classList.add('light');
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <AppGlobal />
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();