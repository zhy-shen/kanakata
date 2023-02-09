import React, { useState } from "react";
import App from "./App";
import Kuroshiro from "kuroshiro-zhyshen";
import "./index.css";

function AppGlobal() {
  const [kuroshiro, setKuroShiro] = useState(new Kuroshiro());
  const [ready, setReady] = useState(false);
  
  return (
    <App
      kuroshiro={kuroshiro}
      setKuroShiro={setKuroShiro}
      ready={ready}
      setReady={setReady}
    />
  );
}

export default AppGlobal;