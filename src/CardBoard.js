import React, { useState } from "react";
import "./CardBoard.css"
import CardBoardPart from "./CardBoardPart";

function CardBoard() {
  const [charSet1, setCharSet1] = useState("hiragana");
  const [charSet2, setCharSet2] = useState("katagana");
  const [buttonSet1, setButtonSet1] = useState("mono");
  const [buttonSet2, setButtonSet2] = useState("mono");

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
    setCharSet1(char1)
    setButtonSet1(button1)
    setCharSet2(char2)
    setButtonSet2(button2)
  }

  return (
    <div className="kana-cards-page">
      <div className="kana-button-control">
        <button onClick={() => switchParts("hira-full")}>
          <span>Hira Full</span>
        </button>
        <button onClick={() => switchParts("kata-full")}>
          <span>Kata Full</span>
        </button>
        <button onClick={() => switchParts("mono-full")}>
          <span>Mono Both</span>
        </button>
      </div>
      <CardBoardPart set={charSet1} type={buttonSet1}/>
      <CardBoardPart set={charSet2} type={buttonSet2}/>
    </div>
  )
}

export default CardBoard;