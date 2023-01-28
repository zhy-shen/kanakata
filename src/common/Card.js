import React from "react";
import "./Card.css"

function Card({ front, back }) {
  return (
    <div className="char-card">
      <div className="card-front">{front}</div>
      <div className="card-back">{back}</div>
    </div>
  )
}

export default Card;