import React from "react";
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
      <div className="button-wrapper">
        <ul className="navigation-buttons">
          {linkMarkup()}
        </ul>
      </div>
    </div>
  );
}
export default MainNavigation;