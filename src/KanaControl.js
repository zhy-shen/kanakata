import React from "react";
import "./KanaControl.css";

//key: JP value: EN\
/*
const placeholder = {
  "monographs": monographs,
  "diacritics": diacritics,
  "digraphs": digraphs
}
*/

function KanaBoard( {sc1, sb1, sc2, sb2} ) {

  function switchParts(part) {
    switch (part) {
      case "hira-full":
        setPart("hiragana", "mono", "hiragana", "else")
        break
      case "kata-full":
        setPart("katagana", "mono", "katagana", "else")
        break
      case "kata":
        setPart("hiragana", "mono", "hiragana", "else")
        break
      case "kata-full":
        setPart("katagana", "mono", "katagana", "else")
        break
      case "mono-full":
        setPart("hiragana", "mono", "katagana", "mono")
        break
    }
  }

  function setPart(char1, button1, char2, button2) {
    sc1(char1)
    sb1(button1)
    sc2(char2)
    sb2(button2)
  }
  
  return (
    <div className="kana-button-control">
      <button onClick={() => switchParts("hira-full")}>
        <span>あ/が</span>
      </button>
      <button onClick={() => switchParts("kata-full")}>
        <span>ア/ガ</span>
      </button>
      <button onClick={() => switchParts("mono-full")}>
        <span>あ/ア</span>
      </button>
    </div>
  )
}

export default KanaBoard;