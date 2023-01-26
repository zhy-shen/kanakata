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
  let kanaFlatten = []
  let hiraFlatten = []
  let kanaEnFlatten = []
  let hiraEnFlatten = []
  
  Object.values(katagana).map((type) => Object.keys(type).map((char) => {
    kanaFlatten.push(char)
  }))
  Object.values(hiragana).map((type) => Object.keys(type).map((char) => {
    hiraFlatten.push(char)
  }))
  Object.values(katagana).map((type) => Object.values(type).map((char) => {
    kanaEnFlatten.push(char)
  }))
  Object.values(hiragana).map((type) => Object.values(type).map((char) => {
    hiraEnFlatten.push(char)
  }))

  function printKana(set, type) {
    if (set === "kana") {
      if (type === "EN") {
        return Object.values(katagana).map((type, index) => Object.values(type).map((char, index2) => {
          return <Button char={char + katagana[index][index2]}/>
        }))
      }
      if (type === "JPEN") {
        return Object.values(katagana).map((type) => Object.keys(type).map((char, index2) => {
          return <Button char={char + ' ' + Object.values(type)[index2]}/>
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
      if (type === "JPEN") {
        return Object.values(hiragana).map((type) => Object.keys(type).map((char, index2) => {
          return <Button char={char + ' ' + Object.values(type)[index2]}/>
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
        {printKana("hira", "JP")}
      </div>
      <div>
        {printKana("kana", "JP")}
      </div>
    </div>
  )
}

export default KanaBoard;