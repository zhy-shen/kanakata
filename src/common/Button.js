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

  function addChar() {
    const inputTRBox = document.querySelector(".input-wrapper.translate");
    
    if (char === "Space") {
      setText(text + ' ');
    }

    else if (char === "Del") {
      setText(text.slice(0, -1));
    }

    else if (char === "Copy") {
      navigator.clipboard.writeText(text);
    }

    else if (char === "Mode") {
    }

    else {
      setText(text + char);
      triggerEvent(inputTRBox, char, 'change');
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