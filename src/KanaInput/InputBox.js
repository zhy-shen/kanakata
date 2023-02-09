import React, { useEffect } from "react";
import svgs from "../common/svgs";
import Button from "../common/Button";
import KuroControl from "./KuroControl";
import Kuroshiro from "kuroshiro-zhyshen";
import "./InputBox.css";

import parse from 'html-react-parser';

//Kuroshiro
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

function InputBox( {
  text,
  setText,
  kuroshiro,
  setKuroShiro,
  ready,
  setReady,
  board,
} ) {
  const formats = ["normal", "spaced", "okurigana", "furigana"];

  const [expanded, setExpanded] = React.useState(false);
  const [engTrans, setEngTrans] = React.useState("Link Starting...");
  const [output, setOutput] = React.useState(formats.random()); //output format: [normal, spaced, okurigana, furigana]
  const [charSet, setCharSet] = React.useState("romaji"); //output set: [hiragana, katakana, romaji]
  const [romaji, setRomaji] = React.useState("hepburn"); //[nippon, passport, hepburn]

  function textReset() {
    const inputTRBox = document.querySelector(".header");
    inputTRBox.addEventListener('change', function (e) {
      setText(e.detail);
    }, { once: true });
  }

  async function kuroTranslate() {
    const engTemp = await kuroshiro.convert(text, { mode: output, to: charSet, romajiSystem: romaji });
    if (engTrans != engTemp) setEngTrans(engTemp);
  }

  //initialize kuroshiro with translator
  async function kuroInit() {
    await kuroshiro.init(new KuromojiAnalyzer({ dictPath: '/kanakata/dict' }));
    setReady(true);
    kuroTranslate();
  }

  function handleText(e) {
    if(e.nativeEvent.inputType === "insertLineBreak") return;
    setText(e.target.value);
  }

  useEffect(() => {
    //only translate when kuroshiro is ready
    if (ready) kuroTranslate();
  }, [text, output, charSet, romaji]);

  useEffect(() => {
    if (board) textReset();
    if (!ready) kuroInit();
  }, []);
  
  return (
    <>
      <div className={"header" + ((expanded) ? " expanded" : "")} >
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
        <div className="control-box">
          <Button key="copy" text={text} setText={setText} char="Copy" display={svgs.copy} />
          <Button key="paste" text={text} setText={setText} char="Paste" display={svgs.paste}/>
          { !board &&
            <Button key="expand" text={expanded} setText={setExpanded} char="Expand" />
          }
          <Button key="translate" text={text} setText={setText} char="Translate" display={svgs.translate} />
          {board &&
            <>
              <Button key="space" text={text} setText={setText} char="Space" display={svgs.space} />
              <Button key="delete" text={text} setText={setText} char="Del" display={svgs.backspace} />
            </>
          }
        </div>
      </div>
      <KuroControl
        charSet={charSet}
        setCharSet={setCharSet}
        output={output}
        setOutput={setOutput}
        romaji={romaji}
        setRomaji={setRomaji}
      />
    </>
  );
}

export default InputBox;