import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import MainNavigation from "./MainNavigation"
import "./App.css"

function App() {
  const [page, setPage] = useState(0);
  const text = "とある科学の超電磁砲";

  return(
    <div className="main">
      <MainNavigation key="nav" page={page} changePage={setPage} />
      <div className={"content" + ( (page === 0) ? " noboard" : "" )}>
        { (page === 0) && <KanaInput key="kanaInput" placeholder={text}/> }
        { (page === 1) && <KanaInput key="kanaBoard" board={true} /> }
        { (page === 2) && <KanaInput key="kanaInputLocal" local={true} board={true} /> }
        { (page === 3) && <CardBoard key="cardBoard" /> }
      </div>
    </div>
  )
}
export default App;