import React, { useEffect } from "react";
import svgs from "../common/svgs";
import Button from "../common/Button";
import KuroControl from "./KuroControl";
import "./InputBox.css";

import parse from 'html-react-parser';

//Kuroshiro
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
const mode = "normal"; // [normal, spaced, okurigana, furigana]
const translateTo = "romaji"; //[hiragana, katakana, romaji]
const romanjiSystem = "passport"; //[nippon, passport, hepburn]

function InputBox( {
  text, 
  setText,
  kuroshiro,
  ready,
  setReady,
  board,
} ) {
  const [engTrans, setEngTrans] = React.useState("Link Starting...");
  const [output, setOutput] = React.useState("furigana"); //output format: [normal, spaced, okurigana, furigana]
  const [charSet, setCharSet] = React.useState("romaji"); //output set: [hiragana, katakana, romaji]

  function textReset() {
    const inputTRBox = document.querySelector(".header");
    inputTRBox.addEventListener('change', function(e) {
      setText(e.detail);
    }, {once : true} );
  }

  async function kuroTranslate() {
    const engTemp = await kuroshiro.convert(text, {mode: output, to: charSet});
    if (engTrans != engTemp) setEngTrans(engTemp);
  }

  //initialize kuroshiro with translator
  async function kuroInit() {
    await kuroshiro.init( new KuromojiAnalyzer({ dictPath: '/kanakata/dict' }));
    setReady(true);
    kuroTranslate();
  }

  useEffect(() => {
    //only translate when kuroshiro is ready
    if (ready) kuroTranslate();
  }, [text, output, charSet]);

  useEffect(() => {
    textReset();
    kuroInit();
  }, []);

  return (
    <>
      <div className="header">
        <div className="input-boxes">
          <div className="input-wrapper">
            { board ?
            <h2 id="input-box">{text}</h2>
            :
            <input
              label="self-input"
              id="input-box"
              defaultValue={text}
              onChange={e => setText(e.target.value)}
              onBlur={e => setText(e.target.value)}
              placeholder="input Japanese here"
              spellCheck="false"
            />
            }
          </div>
          <div className={"input-wrapper translate" + ((output === "furigana") ? " ruby" : "") + ((!ready) ? " prepare" : "")}>
            { (output === "furigana" && ready) ? parse(engTrans) : <h2 id="input-translate">{engTrans}</h2> }
          </div>
        </div>
        <div className="control-box">
          { board &&
            <>
              <Button key="copy" text={text} setText={setText} char="Copy" display={svgs.copy}/>
              <Button key="paste" text={text} setText={setText} char="Paste" display={svgs.paste}/>
            </>
          }
          <Button key="translate" text={text} setText={setText} char="Translate" display={svgs.translate}/>
          <Button key="space" text={text} setText={setText} char="Space" display={svgs.space}/>
          <Button key="delete" text={text} setText={setText} char="Del" display={svgs.backspace}/>
        </div>
      </div>
      <KuroControl charSet={charSet} setCharSet={setCharSet} output={output} setOutput={setOutput} />
    </>
  );
}

export default InputBox;