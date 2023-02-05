import React from "react";
import "../common/KanaControl.css";
import "./KuroControl.css";

const ruby = <ruby>あ<rp>(</rp><rt>a</rt><rp>)</rp></ruby>;

const charSets = ["hiragana", "katakana", "romaji"];
const formats = ["normal", "spaced", "okurigana", "furigana"];
const charSetShort = ["あ", "ア", "A"];
const formatShort = ["N", "S", "()", ruby];
const romajis = ["hepburn", "passport", "nippon"];
const romajiShort = ["H", "P", "N"];

const names = {
  full: [
    charSets,
    formats,
    romajis,
  ],
  short: [
    charSetShort,
    formatShort,
    romajiShort,
  ],
}

function KuroControl( {
  charSet,
  setCharSet,
  output,
  setOutput,
  romaji,
  setRomaji,
} ) {
  
  const [activeSet, setActiveSet] = React.useState(charSet);
  const [activeMode, setActiveMode] = React.useState(output);
  const [activeRomaji, setActiveRomaji] = React.useState(romaji);

  const states = {
    valueActive: [
      activeSet,
      activeMode,
      activeRomaji,
    ],
    setActive: [
      setActiveSet,
      setActiveMode,
      setActiveRomaji,
    ],
    propVal: [
      charSet,
      output,
      romaji,
    ],
    propSet: [ 
      setCharSet,
      setOutput,
      setRomaji,
    ],
  }

  function generateButtons(index) {
    return (
      names.full[index].map((element, subIndex) => {
        return buttonMarkup(index, subIndex, element);
      })
    );
  }

  function buttonMarkup(index, subIndex, element) {
    let markupClass = "";
    if (states.valueActive[index] === element) {
      markupClass += "active";
    }
    if (element === "furigana") {
      (markupClass.length > 0) ? markupClass += " ruby" : markupClass += "ruby";
    }

    return (
      <button
        key={names.short[index][subIndex]}
        className={markupClass}
        onClick={() => switchMode(index, element)}
      >
        <span>{names.short[index][subIndex]}</span>
      </button>
    );
  }

  function switchMode(index, element) {
    states.propSet[index](element);
    states.setActive[index](element);
  }

  return (
    <>
      <div className="kana-button-control kuro charset">
        { generateButtons(0) }
      </div>
      <div className="kana-button-control kuro mode">
        { generateButtons(1) }
      </div>
      <div className="kana-button-control kuro romaji">
        { generateButtons(2) }
      </div>
    </>
  );
}

export default KuroControl;