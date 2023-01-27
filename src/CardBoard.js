import React, { useState } from "react";
import KanaControl from "./KanaControl";
import CardBoardPart from "./CardBoardPart";
import "./CardBoard.css"

function CardBoard() {
  const [charSet1, setCharSet1] = useState("hiragana");
  const [charSet2, setCharSet2] = useState("katagana");
  const [buttonSet1, setButtonSet1] = useState("mono");
  const [buttonSet2, setButtonSet2] = useState("mono");

  return (
    <div className="kana-two-column">
      <KanaControl sc1={setCharSet1} sb1={setButtonSet1} sc2={setCharSet2} sb2={setButtonSet2} />
      <CardBoardPart set={charSet1} type={buttonSet1}/>
      <CardBoardPart set={charSet2} type={buttonSet2}/>
    </div>
  )
}

export default CardBoard;