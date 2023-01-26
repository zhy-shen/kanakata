import React from "react";
import KanaBoard from "./KanaBoard";
import CardBoard from "./CardBoard";
import InputBox from "./InputBox";

function App() {
  return(
    <div class="main">
      <InputBox />
      <KanaBoard />
      <CardBoard />
    </div>
  )
}
export default App;