import React, { useState } from "react";
import KanaBoard from "./KanaBoard";
import InputBox from "./InputBox";
import InputBoxLocal from "./InputBoxLocal";

function KanaInput( {
  kuroshiro,
  setKuroShiro,
  ready,
  setReady,
  local,
  board,
  placeholder,
} ) {
  
  const [inputText, setInputText] = useState(placeholder || "インプット");

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
        setKuroShiro={setKuroShiro}
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