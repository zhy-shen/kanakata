import React from "react";
import katagana from "./katagana";
import hiragana from "./hiragana";

function KanaBoard() {
  function randomChar() {
    const kana = Object.keys(katagana.monographs)
    const hira = Object.keys(hiragana.monographs)
    console.log(kana.length + hira.length)
    
    Math.floor(Math.random() * 50);
  }

  return (
    <div class="match-widget">
      <div></div>
    </div>
  )
}

export default KanaBoard;