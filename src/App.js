import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import MainNavigation from "./MainNavigation"
import textArray from "./constants/defaultText"
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
  
  const [page, setPage] = useState(0);
  const text = textArray.random();

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
            board={true}
            kuroshiro={kuroshiro}
            setKuroShiro={setKuroShiro}
            ready={ready}
            setReady={setReady}
          />}
        {(page === 2) && <KanaInput key="kanaInputLocal" local={true} board={true} />}
        {(page === 3) && <CardBoard key="cardBoard" />}
      </div>
    </div>
  )
}
export default App;