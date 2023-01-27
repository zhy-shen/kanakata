import React, { useState } from "react";
import KanaInput from "./KanaInput";
import CardBoard from "./CardBoard";
import MainNavigation from "./MainNavigation";

function App() {
  const [page, setPage] = useState(1);
  
  return(
    <div className="main">
      <MainNavigation changePage={setPage} />
      <div className="content">
        { (page === 0) && <KanaInput /> }
        { (page === 1) && 
        <div class="kana-cards-page">
          <CardBoard set={"hiragana"} type={"mono"}/>
          <CardBoard set={"hiragana"} type={"else"}/>
        </div>
        }
      </div>
    </div>
  )
}
export default App;