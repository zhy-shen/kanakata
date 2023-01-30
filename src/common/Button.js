import React from "react";
import "./Button.css";

function Button({
  text, 
  setText,
  char,
  display,
  onClick,
}) {
  let lengthClass;
  if (char.length === 2) lengthClass = "two-char";

  const specialChars = [
    "Space",
    "Del",
    "Copy",
    "Mode",
    "Translate"
  ]

  function addChar() {
    const inputTRBox = document.querySelector(".input-wrapper.translate");

    if (! specialChars.includes(char)) {
      setText(text + char);
      triggerEvent(inputTRBox, char, 'change');
    }
    else {
      doSpecialChar(char);
    }
  }

  function doSpecialChar(spChar) {    
    if (spChar === "Space") {
      setText(text + ' ');
    }

    else if (spChar === "Del") {
      setText(text.slice(0, -1));
    }

    else if (spChar === "Copy") {
      navigator.clipboard.writeText(text);
    }

    else if (spChar === "Mode") {
    }

    else if (spChar === "Translate") {
      window.open("https://translate.google.com/?sl=ja&tl=en&text=" + text + "&op=translate", "_blank");
    }
  }
  
  function triggerEvent(element, char, eventName) {
    const event = new CustomEvent(eventName, { 'detail': char });
    element.dispatchEvent(event);
  }

  return (
    <div className="button-wrap"> 
      <button className={lengthClass} onClick={(onClick) ? onClick : addChar}>
        <span>
          {(display) ? display : char}
        </span>
      </button>
    </div>
  );
}

export default Button;