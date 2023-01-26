import React from "react";
import "./Button.css"

function Button({ char }) {
  function addChar() {
    document.querySelector("#input-box").innerHTML += char;
  }

  return (
    <div class="button-wrap">
      <button onClick={addChar}>{char}</button>
    </div>
  )
}

export default Button;