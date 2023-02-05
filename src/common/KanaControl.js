import React from "react";
import "./KanaControl.css";

function KanaControl( {sc1, sb1, sc2, sb2} ) {
  const [activeButton, setActiveButton] = React.useState("mono-full");

  const buttonNames = ["mono-full", "hira-full", "kata-full"];

  function switchParts(part) {
    setActiveButton(part);
    
    switch (part) {
      case "hira-full":
        setPart("hiragana", "mono", "hiragana", "else");
        break;
      case "kata-full":
        setPart("katagana", "mono", "katagana", "else");
        break;
      case "mono-full":
        setPart("hiragana", "mono", "katagana", "mono");
        break;
    }
  }

  function setPart(char1, button1, char2, button2) {
    sc1(char1);
    sb1(button1);
    sc2(char2);
    sb2(button2);
  }
  
  return (
    <div className="kana-button-control">
      <button onClick={() => switchParts(buttonNames[0])} className={(activeButton === buttonNames[0]) ? "active" : null}>
        <span>あ/ア</span>
      </button>
      <button onClick={() => switchParts(buttonNames[1])} className={(activeButton === buttonNames[1]) ? "active" : null}>
        <span>あ/が</span>
      </button>
      <button onClick={() => switchParts(buttonNames[2])} className={(activeButton === buttonNames[2]) ? "active" : null}>
        <span>ア/ガ</span>
      </button>
    </div>
  );
}

export default KanaControl;