import React from "react";
import "./Card.css";

function Card({ front, back }) {
  return (
    <div className="char-card">
      <div className={(front === " ") ? "card-front empty" : "card-front"}>{front}</div>
      <div className={(back === " ") ? "card-back empty" : "card-back"}>{back}</div>
    </div>
  );
}

export default Card;