import React, { useState } from "react"
import Button from "./common/Button"
import KanaInput from "./KanaInput/KanaInput"
import CardBoard from "./CardBoard/CardBoard"
import ColorInput from "./ColorInput"
import MainNavigation from "./MainNavigation"
import svg from "./common/svgs"

function App() {
  const [page, setPage] = useState(0);

  return(
    <div className="main">
      <MainNavigation changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput /> }
        { (page === 1) && <CardBoard /> }
      </div>
      <div className="mode-toggle">
        <Button char="Mode" display={svg.sunMoon}/>
      </div>
      <ColorInput />
    </div>
  )
}
export default App;