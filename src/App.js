import React, { useState } from "react"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import ColorControl from "./ColorControl"
import MainNavigation from "./MainNavigation"

function App() {
  const [page, setPage] = useState(0);

  return(
    <div className="main">
      <MainNavigation changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput /> }
        { (page === 1) && <CardBoard /> }
      </div>
      <ColorControl />
    </div>
  )
}
export default App;