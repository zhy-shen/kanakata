import React, { useEffect, useMemo } from "react";
import svgs from "../common/svgs";
import Button from "../common/Button";
import "./InputBox.css";

import parse from 'html-react-parser';

//Kuroshiro
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
const mode = "normal"; // [normal, spaced, okurigana, furigana]
const translateTo = "romaji"; //[hiragana, katakana, romaji]
const romanjiSystem = "nippon"; //[nippon, passport, hepburn]

function InputBox( {
  text, 
  setText,
  kuroshiro,
  ready,
  setReady,
} ) {
  
  const [engTrans, setEngTrans] = React.useState("Translator Not Yet Ready");

  function textReset() {
    const inputTRBox = document.querySelector(".header");
    inputTRBox.addEventListener('change', function(e) {
      setText(e.detail);
    }, {once : true} );
  }

  async function kuroTranslate() {
    const engTemp = await kuroshiro.convert(text, {mode: mode, to: translateTo});
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
  }, [text]);

  useEffect(() => {
    textReset();
    kuroInit();
  }, []);

  return (
    <div className="header">
      <div className="input-boxes">
      <div className="input-wrapper">
        <h2 id="input-box">{text}</h2>
      </div>
      <div className={"input-wrapper translate" + ((mode === "furigana") ? " ruby" : "")}>
        { (mode === "furigana") ? parse(engTrans) : <h2 id="input-translate">{engTrans}</h2> }
      </div>
      </div>
      <div className="control-box">
        <Button key="copy" text={text} setText={setText} char="Copy" display={svgs.copy}/>
        <Button key="paste" text={text} setText={setText} char="Paste" display={svgs.paste}/>
        <Button key="translate" text={text} setText={setText} char="Translate" display={svgs.translate}/>
        <Button key="space" text={text} setText={setText} char="Space" display={svgs.space}/>
        <Button key="delete" text={text} setText={setText} char="Del" display={svgs.backspace}/>
      </div>
    </div>
  );
}

export default InputBox;

/*
import jpEnMap from "../constants/jpEnMap";
import small from "../constants/jpEnmap/jpEnMapSmall";


  function hasChar(char) {
    return Object.hasOwn(jpEnMap, char);
  }

  function jpToEn(char) {
    return jpEnMap[char];
  }

  checkString();
  function checkString() {
    const string = text;
    let engTemp = '';
    let current, next;

    for (var i = 0; i < string.length; i++) {
      current = string.charAt(i);
      next = string.charAt(i + 1);

      if (current === ' ') {
        engTemp += ' ';
      }

      else if (i < string.length - 1) {
        let twoChar = string.substring(i, i + 2);
        
        //check for doubling next syllable
        if (twoChar.charAt(0) === "ッ" || twoChar.charAt(0) === "っ") {
          if (hasChar(next) && !Object.hasOwn(small, next)) {
            engTemp += jpToEn(next).charAt(0);
          }
        }

        //check if pre calculated diatric exists
        else if (hasChar(twoChar)) {
          engTemp += jpToEn(twoChar);
          i++;
        }

        //check for small kana
        else if (Object.hasOwn(small, current)) {
          if (jpToEn(current).length === 1) {
            engTemp += "~" + jpToEn(current);
          }
          else {
            engTemp = engTemp.slice(0,-1) + jpToEn(current);
          }
        }

        else if (hasChar(current)) {
          engTemp += jpToEn(current);
        }
      }

      else {
        //check for small kana
        if (Object.hasOwn(small, current)) {
          if (jpToEn(current).length === 1) {
            engTemp += "~" + jpToEn(current);
          }
          else if (current !== "ッ" && current !== "っ") {
            engTemp = engTemp.slice(0,-1) + jpToEn(current);
          }
        }

        else if (hasChar(current)) {
          engTemp += jpToEn(current);
        }
      }

      if (i > 0 && string.charAt(i) === 'ー') {
        engTemp += engTemp.slice(-1);
      }
    }
  }

  */