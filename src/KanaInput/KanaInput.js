import React from "react";
import KanaBoard from "./KanaBoard";
import InputBox from "./InputBox";
import InputBoxLocal from "./InputBoxLocal";
import Kuroshiro from "kuroshiro";

function KanaInput( {
  local,
  board,
  placeholder,
} ) {
  const [inputText, setInputText] = React.useState(placeholder || "インプット");
  const [kuroshiro, setKuroShiro] = React.useState(new Kuroshiro());
  const [ready, setReady] = React.useState(false);

  return(
    <>
      { local ?
      <InputBoxLocal key="inputBox" text={inputText} setText={setInputText}/>
      :
      <InputBox
        key="inputBox"
        text={inputText}
        setText={setInputText}
        kuroshiro={kuroshiro}
        ready={ready}
        setReady={setReady}
        board={board}
      />
      }
      {board && <KanaBoard key="board" text={inputText} setText={setInputText}/> }
    </>
  );
}
export default KanaInput;