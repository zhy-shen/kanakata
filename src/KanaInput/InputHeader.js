import React from "react";
import InputBoxControl from "./InputControl"
import InputBoxFields from "./InputFields"

function InputBox({
  text,
  setText,
  ready,
  board,
  newUI,
  output,
  romaji,
  charSet,
  engTrans,
  handleText,
  expanded,
  setExpanded,
}) {

  return (
    <div className={"header" + ((expanded) ? " expanded" : "")}>
      <InputBoxFields
        text={text}
        ready={ready}
        board={board}
        output={output}
        romaji={romaji}
        charSet={charSet}
        expanded={expanded}
        engTrans={engTrans}
        handleText={handleText}
      />
      <InputBoxControl
        text={text}
        setText={setText}
        board={board}
        newUI={newUI}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
}

export default InputBox;