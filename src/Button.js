import React from "react";
import "./Button.css"

function Button({ char }) {

  function addChar() {
    
    const inputTRBox = document.querySelector(".input-wrapper.translate")
    const input = document.querySelector("#input-box");

    if (char === "Space") {
      input.innerHTML += ' ';
    }

    else if (char === "Delete") {
      input.innerHTML = input.innerHTML.slice(0, -1);
    }

    else {
      input.innerHTML += char
    }

    triggerEvent(inputTRBox, 'change')
  }
  
  function triggerEvent(element, eventName) {
    const event = document.createEvent('HTMLEvents')
    event.initEvent(eventName, false, true)
    element.dispatchEvent(event)
  }

  return (
    <div class="button-wrap">
      <button key={char} onClick={addChar}>{char}</button>
    </div>
  )
}

export default Button;