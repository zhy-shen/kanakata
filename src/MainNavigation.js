import React from "react";
import ColorControl from "./ColorControl"
import "./MainNavigation.css";

function MainNavigation({ changePage }) {
  const links = [
    "KanaInput",
    "KanaBoard",
    "KanaLocal",
    "CardBoard",
  ]

  function linkMarkup() {
    return (
      links.map((element, index) => {
        return liMarkup(element, index);
      })
    );
  }

  function liMarkup(text, index) {
    return (
      <li key={text} onClick={() => changePage(index)}>
        <span>{text}</span>
      </li>
    );
  }

  return(
    <div className="navigation">
      <ul>
        {linkMarkup()}
      </ul>
      <ColorControl key="color" />
    </div>
  );
}
export default MainNavigation;