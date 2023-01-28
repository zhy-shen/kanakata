import React, { useEffect } from "react";
import katagana from "./katagana";
import hiragana from "./hiragana";
import Button from "./Button"
import "./InputBox.css"

function InputBox( {
  text, 
  setText
} ) {
  let jpFlatten = []
  let enFlatten = []
  let engTrans = "inputto";

  const num = 107;
  
  Object.values(katagana).map((type) => Object.keys(type).map((char) => {
    jpFlatten.push(char)
  }))
  Object.values(hiragana).map((type) => Object.keys(type).map((char) => {
    jpFlatten.push(char)
  }))
  Object.values(katagana).map((type) => Object.values(type).map((char) => {
    enFlatten.push(char)
  }))


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
          if (string.charAt(i + 1) !== ' ') {
            engTemp += jpToEn(string.charAt(i + 1)).charAt(0)
          }
        }

        else if (jpFlatten.indexOf(twoChar) !== -1) {
          engTemp += jpToEn(twoChar)
          i++
        }

        else {
          engTemp += jpToEn(string.charAt(i))
        }
      }

      else {
        if (string.charAt(i) !== "ッ") {
          engTemp += jpToEn(string.charAt(i))
        }
      }
    }

    engTrans = engTemp
  }

  function jpToEn(char) {
    return enFlatten[jpFlatten.indexOf(char) % num];
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