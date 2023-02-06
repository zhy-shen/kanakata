import React from "react";
import ColorControl from "./ColorControl"
import "./MainNavigation.css";

function MainNavigation({
  page,
  changePage,
}) {
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
    let markupClass = "";
    if (page === index) {
      markupClass += "active";
    }

    return (
      <li key={text} onClick={() => changePage(index)}>
        <span className={markupClass}>{text}</span>
      </li>
    );
  }

  return(
    <div className="navigation">
      <ul className="navigation-buttons">
        {linkMarkup()}
      </ul>
      <ColorControl key="color" />
    </div>
  );
}
export default MainNavigation;