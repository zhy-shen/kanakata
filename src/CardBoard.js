import React from "react";
import "./CardBoard.css"
import CharCard from "./Card";
import katagana from "./katagana";
import hiragana from "./hiragana";

function CardBoard({ char }) {
  function printKanaEng() {
    const kana = Object.keys(katagana.monographs)
    const kanaEng = Object.values(hiragana.monographs)

    return kanaEng.map((eng, index) => {
      return (
        <CharCard front={kana[index]} back={kanaEng[index]} />
      )
    })
  }

  return (
    <div class="kana-cards">
      {printKanaEng()}
    </div>
  )
}

export default CardBoard;