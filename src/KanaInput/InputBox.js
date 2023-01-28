import React, { useEffect } from "react"
import jpEnMap from "../constants/jpEnMap"
import small from "../constants/jpEnmap/jpEnMapSmall"
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
    let current, next

    for (var i = 0; i < string.length; i++) {
      current = string.charAt(i);
      next = string.charAt(i + 1);

      if (current === ' ') {
        engTemp += ' '
      }

      else if (i < string.length - 1) {
        let twoChar = string.substring(i, i + 2)
        
        //check for doubling next syllable
        if (twoChar.charAt(0) === "ッ" || twoChar.charAt(0) === "っ") {
          if (hasChar(next)) {
            engTemp += jpToEn(next).charAt(0)
          }
        }

        //check if pre calculated diatric exists
        else if (hasChar(twoChar)) {
          engTemp += jpToEn(twoChar)
          i++
        }

        //check for small kana
        else if (Object.hasOwn(small, current)) {
          if (jpToEn(current).length === 1) {
            engTemp += "~" + jpToEn(current)
          }
          else {
            engTemp = engTemp.slice(0,-1) + jpToEn(current)
          }
        }

        else if (hasChar(current)) {
          engTemp += jpToEn(current)
        }
      }

      else {
        //check for small kana
        if (Object.hasOwn(small, current)) {
          if (jpToEn(current).length === 1) {
            engTemp += "~" + jpToEn(current)
          }
          else {
            engTemp = engTemp.slice(0,-1) + jpToEn(current)
          }
        }

        else if (hasChar(current)) {
          engTemp += jpToEn(current)
        }
      }

      if (i > 0 && string.charAt(i) === 'ー') {
        engTemp += engTemp.slice(-1)
      }
    }

    engTrans = engTemp
  }

  function hasChar(char) {
    return Object.hasOwn(jpEnMap, char)
  }

  function jpToEn(char) {
    return jpEnMap[char]
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
        <Button text={text} setText={setText} char="Space"/>
        <Button text={text} setText={setText} char="Delete"/>
      </div>
    </div>
  )
}

export default InputBox;