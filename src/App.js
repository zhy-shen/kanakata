import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import ColorControl from "./ColorControl"
import MainNavigation from "./MainNavigation"

function App() {
  const [page, setPage] = useState(0);
  const text = "とある科学の超電磁砲";

  return(
    <div className="main">
      <MainNavigation key="nav" changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput key="kanaInput" placeholder={text}/> }
        { (page === 1) && <KanaInput key="kanaBoard" board={true} /> }
        { (page === 2) && <KanaInput key="kanaInputLocal" local={true} board={true} /> }
        { (page === 3) && <CardBoard key="cardBoard" /> }
      </div>
      <ColorControl key="clor" />
    </div>
  )
}
export default App;