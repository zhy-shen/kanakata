import React, { useEffect } from "react";
import KuroControl from "../KuroControl";
import InputBoxHeader from "./InputHeader";
import "./InputBox.css";

//Kuroshiro
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

function InputBox({
  text,
  setText,
  kuroshiro,
  setKuroShiro,
  ready,
  setReady,
  board,
}) {
  let params = (new URL(document.location)).searchParams;

  const charSets = ["hiragana", "katakana", "romaji"];
  const formats = ["normal", "spaced", "okurigana", "furigana"];

  const initialCharSet = charSets.includes(params.get("c")) ? params.get("c") : charSets.random()
  const initialFormat = formats.includes(params.get("f")) ? params.get("f") : formats.random()

  const [newUI, setNewUI] = React.useState(window.innerWidth < 3000);
  const [expanded, setExpanded] = React.useState(false);
  const [engTrans, setEngTrans] = React.useState("Link Starting...");
  const [charSet, setCharSet] = React.useState(initialCharSet); //output set: [hiragana, katakana, romaji]
  const [output, setOutput] = React.useState(initialFormat); //output format: [normal, spaced, okurigana, furigana]
  const [romaji, setRomaji] = React.useState(params.get("r") || "hepburn"); //[nippon, passport, hepburn]

  function setURL() {
    let url = "";
    url += "?text=" + text + "&f=" + output + "&c=" + charSet + "&r=" + romaji;

    if (params.get("color")) {
      url += "&color=" + params.get("color");
    }

    window.history.pushState({}, "", url || window.location.href.split("?")[0]);
  }

  useEffect(() => {
    setURL();
  }, [text, output, charSet, romaji])

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
    if (e.nativeEvent.inputType === "insertLineBreak") return;
    setText(e.target.value);
  }

  function updateMedia() {
    setNewUI(window.innerWidth < 3000);
  };

  useEffect(() => {
    //only translate when kuroshiro is ready
    if (ready) kuroTranslate();
  }, [text, output, charSet, romaji]);

  useEffect(() => {
    if (board) textReset();
    if (!ready) kuroInit();

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <InputBoxHeader
        text={text}
        setText={setText}
        ready={ready}
        board={board}
        newUI={newUI}
        output={output}
        romaji={romaji}
        charSet={charSet}
        engTrans={engTrans}
        handleText={handleText}
        expanded={expanded}
        setExpanded={setExpanded}
      />
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