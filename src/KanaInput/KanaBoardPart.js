import React from "react";
import Button from "../common/Button";
import katagana from "../constants/katagana";
import hiragana from "../constants/hiragana";
//import "./KanaBoard.css";

//key: JP value: EN\
/*
const placeholder = {
  "monographs": monographs,
  "diacritics": diacritics,
  "digraphs": digraphs
}
*/

function KanaBoardPart({
  text, 
  setText,
  charSet,
  buttonSet,
}) {

  function printKana(set, type) {
    let mainSet, chars;

    if (set === "hiragana") {
      mainSet = hiragana;
    }
    else if (set === "katagana") {
      mainSet = katagana;
    }

    if (mainSet) {
      if (type === "mono") {
        chars = Object.keys(mainSet.monographs);
      }
      else if (type === "else") {
        chars = Object.keys(mainSet.diacritics).concat(Object.keys(mainSet.small));
      }

      return chars.map((char) => {
        return charMarkup(char);
      })
    }

    return <></>
  }

  const specialChars = {
    single: ["や", "ゆ", "ヤ", "ユ", "ワ", "ヴ", "ゃ", "ゅ", "ャ", "ュ"],
    triple: ["わ"],
    n: ["ん", "ン"],
  }

  function charMarkup(char) {
    if (specialChars.n.includes(char)) {
      return (
        <>
          <Button key={char} text={text} setText={setText} char={char}/>
          <Button key={char + "1"} text={text} setText={setText} char=" "/>
          <Button key={char + "2"} text={text} setText={setText} char={(char === "ん") ? "っ" : "ッ"}/>
          <Button key={char + "3"} text={text} setText={setText} char=" "/>
          <Button key={char + "4"} text={text} setText={setText} char={(char === "ン") ? "ー" : " "}/>
        </>
      );
    }
    if (specialChars.triple.includes(char)) {
      return (
        <>
          <Button key={char} text={text} setText={setText} char={char}/>
          <Button key={char + "1"} text={text} setText={setText} char=" "/>
          <Button key={char + "2"} text={text} setText={setText} char=" "/>
          <Button key={char + "3"} text={text} setText={setText} char=" "/>
        </>
      );
    }
    else if (specialChars.single.includes(char)) {
      return (
        <>
          <Button key={char} text={text} setText={setText} char={char}/>
          <Button key={char + "1"} text={text} setText={setText} char=" "/>
        </>
      );
    }
    else {
      return <Button key={char} text={text} setText={setText} char={char}/>
    }
  }

  return (
    <div className="kana-input-buttons">
      {printKana(charSet, buttonSet)}
    </div>
  );
}

export default KanaBoardPart;