import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import ColorControl from "./ColorControl"
import MainNavigation from "./MainNavigation"

function App() {
  const [page, setPage] = useState(0);

  return(
    <div className="main">
      <MainNavigation key="nav" changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput key="kanaInput" /> }
        { (page === 1) && <CardBoard key="cardBoard" /> }
      </div>
      <ColorControl key="clor" />
    </div>
  )
}
export default App;