import React from "react";
import svgs from "../common/svgs";
import Button from "../common/Button";
import "./ControlBox.css";

function ControlBox({
  text,
  setText,
  board,
  newUI,
  expanded,
  setExpanded,
}) {

  return (
    <div className="control-box">
      <Button key="copy" text={text} setText={setText} char="Copy" display={svgs.copy} />
      <Button key="paste" text={text} setText={setText} char="Paste" display={svgs.paste} />
      <Button key="translate" text={text} setText={setText} char="Translate" display={svgs.translate} />
      {!board && newUI &&
        <Button key="expand" text={expanded} setText={setExpanded} char="Expand" display={svgs.expand} />
      }
      {board &&
        <>
          <Button key="space" text={text} setText={setText} char="Space" display={svgs.space} />
          <Button key="delete" text={text} setText={setText} char="Del" display={svgs.backspace} />
        </>
      }
    </div>
  );
}

export default ControlBox;