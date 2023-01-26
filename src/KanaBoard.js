import React from "react";
import Button from "./Button";
import katagana from "./katagana";
import hiragana from "./hiragana";
import "./KanaBoard.css";

//key: JP value: EN\
/*
const placeholder = {
  "monographs": monographs,
  "diacritics": diacritics,
  "digraphs": digraphs
}
*/

function KanaBoard() {
  function printKana(set, type) {
    if (set === "kana") {
      if (type === "EN") {
        return Object.values(katagana).map((type) => Object.values(type).map((char) => {
          return <Button char={char}/>
        }))
      }
      if (type === "JP") {
        return Object.values(katagana).map((type) => Object.keys(type).map((char) => {
          return <Button char={char}/>
        }))
      }
    }

    if (set === "hira") {
      if (type === "EN") {
        return Object.values(hiragana).map((type) => Object.values(type).map((char) => {
          return <Button char={char}/>
        }))
      }
      if (type === "JP") {
        return Object.values(hiragana).map((type) => Object.keys(type).map((char) => {
          return <Button char={char}/>
        }))
      }
    }
    else {
      return
    }
  }

  return (
    <div class="kana-buttons">
      <div>
        {printKana("kana", "JP")}
      </div>
      <div>
        {printKana("hira", "JP")}
      </div>
    </div>
  )
}

export default KanaBoard;