import React from "react";
import "./InputBox.css";

import parse from 'html-react-parser';

function InputBoxFields({
  text,
  ready,
  board,
  output,
  expanded,
  engTrans,
  handleText,
}) {

  return (
    <div className="input-boxes">
      <div className="input-wrapper">
        {board ?
          <h2 id="input-box">{text}</h2>
          :
          <textarea
            wrap={(expanded) ? "" : "off"}
            label="self-input"
            id="input-box"
            value={text}
            onChange={e => handleText(e)}
            placeholder="input here (kanji / hiragana / katagana)"
            spellCheck="false"
          />
        }
      </div>
      <div className={"input-wrapper translate" + ((output === "furigana") ? " ruby" : "") + ((!ready) ? " prepare" : "")}>
        {(output === "furigana" && ready) ? parse(engTrans) : <h2 id="input-translate">{engTrans}</h2>}
      </div>
    </div>
  );
}

export default InputBoxFields;