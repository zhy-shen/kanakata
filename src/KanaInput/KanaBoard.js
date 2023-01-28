import React, { useState } from "react";
import KanaControl from "../common/KanaControl";
import KanaBoardPart from "./KanaBoardPart";
import "./KanaBoard.css";

//key: JP value: EN\
/*
const placeholder = {
  "monographs": monographs,
  "diacritics": diacritics,
  "digraphs": digraphs
}
*/

function KanaBoard( {
  text, 
  setText
} ) {
  const [charSet1, setCharSet1] = useState("hiragana");
  const [charSet2, setCharSet2] = useState("katagana");
  const [buttonSet1, setButtonSet1] = useState("mono");
  const [buttonSet2, setButtonSet2] = useState("mono");
  
  return (
    <div className="kana-two-column">
      <KanaControl sc1={setCharSet1} sb1={setButtonSet1} sc2={setCharSet2} sb2={setButtonSet2} />
      <KanaBoardPart text={text} setText={setText} charSet={charSet1} buttonSet={buttonSet1} />
      <KanaBoardPart text={text} setText={setText} charSet={charSet2} buttonSet={buttonSet2} />
    </div>
  )
}

export default KanaBoard;