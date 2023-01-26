import React, { useEffect } from "react";
import katagana from "./katagana";
import hiragana from "./hiragana";
import Button from "./Button"
import "./InputBox.css"

function InputBox() {
  let jpFlatten = []
  let enFlatten = []

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

  function autoTranslate() {
    const inputTR = document.querySelector("#input-translate")
    const inputTRBox = document.querySelector(".input-wrapper.translate")    
    
    inputTRBox.addEventListener('change', () => {  
      inputTR.innerHTML = checkString();
    })
  }

  function checkString() {
    const input = document.querySelector("#input-box")
    const string = input.innerHTML;
    let engTrans = '';

    for (var i = 0; i < string.length; i++) {

      if (string.charAt(i) === ' ') {
        engTrans += ' '
      }

      else if (i < string.length - 1) {
        let twoChar = string.substring(i, i + 2)
        
        if (twoChar.charAt(0) === "ッ" && string.charAt(i + 1) !== ' ') {
          engTrans += jpToEn(string.charAt(i + 1)).charAt(0)
        }

        else if (jpFlatten.indexOf(twoChar) !== -1) {
          engTrans += jpToEn(twoChar)
          i++
        }

        else {
          engTrans += jpToEn(string.charAt(i))
        }
      }

      else {
        if (string.charAt(i) !== "ッ") {
          engTrans += jpToEn(string.charAt(i))
        }
      }
    }

    return engTrans
  }

  function jpToEn(char) {
    return enFlatten[jpFlatten.indexOf(char) % num];
  }

  useEffect(() => {
    autoTranslate();
  }, [])

  return (
    <div class="header">
      <div class="input-wrapper">
        <h2 id="input-box">インプット</h2>
      </div>
      <div class="input-wrapper translate">
        <h2 id="input-translate"></h2>
      </div>
      <div class="control-box">
        <Button char="ッ"/>
        <Button char="Space"/>
        <Button char="Delete"/>
      </div>
    </div>
  )
}

export default InputBox;