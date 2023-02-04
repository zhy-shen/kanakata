import React from "react";
import KanaBoard from "./KanaBoard";
import InputBox from "./InputBox";
import Kuroshiro from "kuroshiro";

function KanaInput() {
  const [inputText, setInputText] = React.useState("インプット");
  const [kuroshiro, setKuroShiro] = React.useState(new Kuroshiro());
  const [ready, setReady] = React.useState(false);

  return(
    <>
      <InputBox
        key="inputBox"
        text={inputText}
        setText={setInputText}
        kuroshiro={kuroshiro}
        ready={ready}
        setReady={setReady}
      />
      <KanaBoard key="board" text={inputText} setText={setInputText}/>
    </>
  );
}
export default KanaInput;