import React from "react";
import "./Button.css"

function Button({ char }) {
  let lengthClass;
  if (char.length === 2) lengthClass = "two-char"

  function addChar() {
    
    const inputTRBox = document.querySelector(".input-wrapper.translate")
    const input = document.querySelector("#input-box");

    if (char === "Space") {
      input.innerHTML += ' ';
    }

    else if (char === "Delete") {
      input.innerHTML = input.innerHTML.slice(0, -1);
    }

    else if (char === "Mode") {
      document.querySelector("body").classList.toggle('night-mode');
    }

    else {
      input.innerHTML += char
    }

    if (char !== "Mode") {
      triggerEvent(inputTRBox, 'change')
    }
  }
  
  function triggerEvent(element, eventName) {
    const event = document.createEvent('HTMLEvents')
    event.initEvent(eventName, false, true)
    element.dispatchEvent(event)
  }

  return (
    <div className="button-wrap">
      <button key={char} className={lengthClass} onClick={addChar}>
        <span>
          {char}
        </span>
      </button>
    </div>
  )
}

export default Button;