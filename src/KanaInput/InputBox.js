import React, { useEffect } from "react";
import katagana from "../constants/katagana";
import hiragana from "../constants/hiragana";
import jpEnMap from "../constants/jpEnMap";
import Button from "../common/Button"
import "./InputBox.css"

function InputBox( {
  text, 
  setText
} ) {
  let engTrans = "inputto";

  const firstTime = true;
  function autoTranslate() {
    const inputTRBox = document.querySelector(".input-wrapper.translate")
    
    inputTRBox.addEventListener('change', function(e) {
      setText(e.detail);
    }, {once : true})
  }

  checkString()
  function checkString() {
    const string = text
    let engTemp = '';

    for (var i = 0; i < string.length; i++) {

      if (string.charAt(i) === ' ') {
        engTemp += ' '
      }

      else if (i < string.length - 1) {
        let twoChar = string.substring(i, i + 2)
        
        if (twoChar.charAt(0) === "ッ") {
          if (Object.hasOwn(jpEnMap, string.charAt(i + 1))) {
            engTemp += jpToEn(string.charAt(i + 1)).charAt(0)
          }
        }

        else if (Object.hasOwn(jpEnMap, twoChar)) {
          engTemp += jpToEn(twoChar)
          i++
        }

        else {
          engTemp += jpToEn(string.charAt(i))
        }
      }

      else {
        if (Object.hasOwn(jpEnMap, string.charAt(i))) {
          engTemp += jpToEn(string.charAt(i))
        }
      }
    }

    engTrans = engTemp
  }

  function jpToEn(char) {
    return jpEnMap[char];
  }

  useEffect(() => {
    autoTranslate();
  }, [])

  return (
    <div className="header">
      <div className="input-boxes">
      <div className="input-wrapper">
        <h2 id="input-box">{text}</h2>
      </div>
      <div className="input-wrapper translate">
        <h2 id="input-translate">{engTrans}</h2>
      </div>
      </div>
      <div className="control-box">
        <Button text={text} setText={setText} char="ッ"/>
        <Button text={text} setText={setText} char="Space"/>
        <Button text={text} setText={setText} char="Delete"/>
      </div>
    </div>
  )
}

export default InputBox;