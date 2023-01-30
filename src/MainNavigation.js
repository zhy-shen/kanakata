import React from "react";
import "./MainNavigation.css";

function MainNavigation({ changePage }) {
  return(
    <div className="navigation">
      <ul>
        <li onClick={() => changePage(0)}>
          <span>KanaInput</span>
        </li>
        <li onClick={() => changePage(1)}>
          <span>CardBoard</span>
        </li>
        <li onClick={() => changePage(2)}>
          <span>Test</span>
        </li>
      </ul>
    </div>
  );
}
export default MainNavigation;