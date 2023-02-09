import React from "react";
import InputBoxControl from "./InputBoxControl"
import InputBoxFields from "./InputBoxFields"

function InputBox({
  text,
  setText,
  ready,
  board,
  newUI,
  output,
  engTrans,
  handleText,
  expanded,
  setExpanded,
}) {

  return (
    <div className={"header" + ((expanded) ? " expanded" : "")} >
        <InputBoxFields
          text={text}
          ready={ready}
          board={board}
          output={output}
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