import React from "react";
import "./Card.css"

function Card({ front, back }) {
  return (
    <div class="char-card">
      <div class="card-front">{front}</div>
      <div class="card-back">{back}</div>
    </div>
  )
}

export default Card;