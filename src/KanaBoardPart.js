import React from "react";
import Button from "./Button";
import katagana from "./katagana";
import hiragana from "./hiragana";
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
  charSet,
  buttonSet
}) {

  function printKana(set, type) {
    let mainSet
    let chars

    if (set === "hiragana") {
      mainSet = hiragana
    }
    else if (set === "katagana") {
      mainSet = katagana
    }

    if (mainSet) {
      if (type === "mono") {
        chars = Object.keys(mainSet.monographs)
      }
      else if (type === "else") {
        chars = Object.keys(mainSet.diacritics).concat(Object.keys(mainSet.digraphs))
      }

      return chars.map((char) => {
        return charMarkup(char)
      })
    }

    return <></>

    if (set === "katagana") {
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
          return charMarkup(char)
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
          return charMarkup(char);
        }))
      }
    }

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
          return charMarkup(char)
        }))
      }
    }

    else {
      return
    }
  }

  function charMarkup(char) {
    if (char === "ん" || char === "ン") {
      return (
        <>
          <Button char={char}/>
          <Button char=" "/>
          <Button char=" "/>
          <Button char=" "/>
          <Button char=" "/>
        </>
      )
    }
    if (char === "わ" || char === "ワ") {
      return (
        <>
          <Button char={char}/>
          <Button char=" "/>
          <Button char=" "/>
          <Button char=" "/>
        </>
      )
    }
    else if (char === "や" || char === "ゆ" || char === "ヤ" || char === "ユ") {
      return (
        <>
          <Button char={char}/>
          <Button char=" "/>
        </>
      )
    }
    else {
      return <Button char={char}/>
    }
  }

  return (
    <div>
      {printKana(charSet, buttonSet)}
    </div>
  )
}

export default KanaBoardPart;