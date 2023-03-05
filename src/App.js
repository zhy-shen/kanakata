import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import MainNavigation from "./MainNavigation"
import textArray from "./constants/defaultText"
import ColorControl from "./ColorControl"
import "./App.css"

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

function App({
  kuroshiro,
  setKuroShiro,
  ready,
  setReady,
}) {
  let params = (new URL(document.location)).searchParams;
  
  const [page, setPage] = useState(0);
  const text = params.get("text") ? params.get("text").decode() : textArray.random();

  return (
    <div className="main">
      <MainNavigation key="nav" page={page} changePage={setPage} />
      <div className={"content" + ((page === 0) ? " noboard" : "")}>
        {(page === 0) &&
          <KanaInput
            key="kanaInput"
            placeholder={text}
            kuroshiro={kuroshiro}
            setKuroShiro={setKuroShiro}
            ready={ready}
            setReady={setReady}
          />}
        {(page === 1) &&
          <KanaInput
            key="kanaBoard"
            placeholder={text}
            board={true}
            kuroshiro={kuroshiro}
            setKuroShiro={setKuroShiro}
            ready={ready}
            setReady={setReady}
          />}
        {(page === 2) && <KanaInput key="kanaInputLocal" local={true} board={true} />}
        {(page === 3) && <CardBoard key="cardBoard" />}
        <ColorControl key="color" />
      </div>
    </div>
  )
}
export default App;