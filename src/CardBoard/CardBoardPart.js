import React from "react";
import CharCard from "../common/Card";
import katagana from "../constants/katagana";
import hiragana from "../constants/hiragana";
import jpEnMap from "../constants/jpEnMap";
import "./CardBoard.css"

function CardBoard({ set, type }) {

  function printCards(set, type) {
    let mainSet;
    let chars;

    if (set === "hiragana") {
      mainSet = hiragana
    }
    else if (set === "katagana") {
      mainSet = katagana
    }

    if (mainSet) {
      if (type === "mono") {
        chars = Object.keys(mainSet.monographs);
      }
      else if (type === "else") {
        chars = Object.keys(mainSet.diacritics).concat(Object.keys(mainSet.digraphs));
      }

      return chars.map((char) => {
        return cardMarkup(char, jpEnMap[char]);
      });
    }
  }

  function cardMarkup(front, back) {
    if (front === "ん" || front === "ン") {
      return (
        <React.Fragment key={front + "fragment"}>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
        </React.Fragment>
      );
    }
    if (front === "わ" || front === "ワ") {
      return (
        <React.Fragment key={front + "fragment"}>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
          <CharCard front=" " back=" " />
        </React.Fragment>
      );
    }
    else if (front === "や" || front === "ゆ" || front === "ヤ" || front === "ユ") {
      return (
        <React.Fragment key={front + "fragment"}>
          <CharCard front={front} back={back} />
          <CharCard front=" " back=" " />
        </React.Fragment>
      );
    }
    else {
      return (
        <CharCard key={front} front={front} back={back} />
      );
    }
  }

  return (
    <div className="kana-cards">
      {printCards(set, type)}
    </div>
  )
}

export default CardBoard;