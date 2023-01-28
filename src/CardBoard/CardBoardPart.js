import React from "react";
import "./CardBoard.css"
import CharCard from "../common/Card";
import katagana from "../constants/katagana";
import hiragana from "../constants/hiragana";

function CardBoard({ set, type }) {
  
  let kataFlatten = []
  let hiraFlatten = []
  let enFlatten = []
  
  Object.values(katagana).map((type) => Object.values(type).map((char) => {
    enFlatten.push(char)
  }))

  const num = 107;

  function printCards(set, type) {
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

      return chars.map((char, index) => {
        let trueIndex = index
        if (type === "else") trueIndex += 46
        return cardMarkup(char, enFlatten[trueIndex])
      })
    }
  }

  function printHira() {
    return kataFlatten.map((char, index) => {
      return (
        <CharCard front={kataFlatten[index]} back={enFlatten[index]} />
      )
    })
  }

  function printKata() {
    return hiraFlatten.map((char, index) => {
      return (
        <CharCard front={hiraFlatten[index]} back={enFlatten[index]} />
      )
    })
  }

  function cardMarkup(front, back) {
    if (front === "ん" || front === "ン") {
      return (
        <>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
        </>
      )
    }
    if (front === "わ" || front === "ワ") {
      return (
        <>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
        </>
      )
    }
    else if (front === "や" || front === "ゆ" || front === "ヤ" || front === "ユ") {
      return (
        <>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
        </>
      )
    }
    else {
      return (
        <CharCard front={front} back={back} />
      )
    }
  }

  return (
    <div className="kana-cards">
      {printCards(set, type)}
    </div>
  )
}

export default CardBoard;