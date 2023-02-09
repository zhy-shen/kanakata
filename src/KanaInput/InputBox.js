import React, { useEffect } from "react";
import KuroControl from "./KuroControl";
import InputBoxHeader from "./InputBoxHeader";
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
  const formats = ["normal", "spaced", "okurigana", "furigana"];

  const [newUI, setNewUI] = React.useState(window.innerWidth < 500);

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
    if (e.nativeEvent.inputType === "insertLineBreak") return;
    setText(e.target.value);
  }

  const updateMedia = () => {
    setNewUI(window.innerWidth < 500);
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