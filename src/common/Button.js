import React from "react";
import "./Button.css"

function Button({
  text, 
  setText,
  char,
  display
}) {
  let lengthClass;
  if (char.length === 2) lengthClass = "two-char"

  function addChar() {
    const inputTRBox = document.querySelector(".input-wrapper.translate")
    
    if (char === "Space") {
      setText(text + ' ')
    }

    else if (char === "Del") {
      setText(text.slice(0, -1))
    }

    else if (char === "Copy") {
      navigator.clipboard.writeText(text)
    }

    else if (char === "Mode") {
      document.querySelector("body").classList.toggle('night-mode')
      
      if (parseFloat(window.getComputedStyle(document.body).getPropertyValue('--l')) > 60 ) {
        document.querySelector("body").classList.add('light');
      }
      else {
        document.querySelector("body").classList.remove('light');
      }
    }

    else {
      setText(text + char)
      triggerEvent(inputTRBox, char, 'change')
    }

  }
  
  function triggerEvent(element, char, eventName) {
    const event = new CustomEvent(eventName, { 'detail': char })
    element.dispatchEvent(event)
  }

  return (
    <div className="button-wrap">
      <button key={char} className={lengthClass} onClick={addChar}>
        <span>
          {(display) ? display : char}
        </span>
      </button>
    </div>
  )
}

export default Button;