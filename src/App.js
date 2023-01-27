import React, { useState } from "react";
import Button from "./Button";
import KanaInput from "./KanaInput";
import CardBoard from "./CardBoard";
import MainNavigation from "./MainNavigation";

function App() {
  const [page, setPage] = useState(0);
  
  return(
    <div className="main">
      <MainNavigation changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput /> }
        { (page === 1) && <CardBoard /> }
      </div>
      <div className="mode-toggle"><Button char="Mode"/></div>
    </div>
  )
}
export default App;