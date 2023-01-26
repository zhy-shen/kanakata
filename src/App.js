import React from "react";
import CharCard from "./CharCard";
import KanaBoard from "./KanaBoard";
import katagana from "./katagana";
import hiragana from "./hiragana";

function App() {
  function printKanaEng() {
    const kana = Object.keys(katagana.monographs)
    const kanaEng = Object.values(hiragana.monographs)

    return kanaEng.map((eng, index) => {
      return (
        <CharCard front={kana[index]} back={kanaEng[index]} />
      )
    })
  }

  function addSpace() {
    document.querySelector("#input-box").innerHTML += ' ';
  }

  function textDelete(){
    document.querySelector("#input-box").innerHTML = document.querySelector("#input-box").innerHTML.slice(0, -1);
  }
  
  return(
    <div class="main">
      <div class="header">
        <div class="control-box">
          <button onClick={addSpace}>Space</button>
          <button onClick={textDelete}>Delete</button>
        </div>
        <h2 id="input-box">Using .map()</h2>
      </div>
      <KanaBoard />
      <div class="kana-cards">
        {printKanaEng()}
      </div>
    </div>
  )
}
export default App;