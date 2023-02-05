import React from "react";
import "../common/KanaControl.css";
import "./KuroControl.css";

const romanjiSystem = "nippon"; //[nippon, passport, hepburn]
const ruby = <ruby>あ<rp>(</rp><rt>a</rt><rp>)</rp></ruby>;

const charSets = ["hiragana", "katakana", "romaji"];
const formats = ["normal", "spaced", "okurigana", "furigana"];
const charSetShort = ["あ", "ア", "A"];
const formatShort = ["N", "S", "()", ruby];

function KuroControl( {
  charSet,
  setCharSet,
  output,
  setOutput,
} ) {
  
  const [activeSet, setActiveSet] = React.useState(charSet);
  const [activeMode, setActiveMode] = React.useState(output);

  function charSetMarkup() {
    return (
      charSets.map((element, index) => {
        return buttonMarkup(switchCharSet, charSets, activeSet, charSetShort, index);
      })
    );
  }

  function modeMarkup() {
    return (
      formats.map((element, index) => {
          return buttonMarkup(switchFormat, formats, activeMode, formatShort, index);
      })
    );
  }

  function buttonMarkup(click, set, activeSet, short, index) {
    let markupClass = "";
    if (activeSet === set[index]) {
      markupClass += "active";
    }
    if (set[index] === "furigana") {
      (markupClass.length > 0) ? markupClass += " ruby" : markupClass += "ruby";
    }

    return (
      <button
        key={short[index]}
        className={markupClass}
        onClick={() => click(set[index], index)}
      >
        <span>{short[index]}</span>
      </button>
    );
  }

  function switchCharSet(set, index) {
    setCharSet(set);
    setActiveSet(set);
  }

  function switchFormat(format, index) {
    setOutput(format);
    setActiveMode(format);
  }

  return (
    <>
      <div className="kana-button-control kuro">
        {charSetMarkup()}
      </div>
      <div className="kana-button-control kuro">
        {modeMarkup()}
      </div>
    </>
  );
}

export default KuroControl;