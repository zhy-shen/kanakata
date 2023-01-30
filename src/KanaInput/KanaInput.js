import React from "react";
import KanaBoard from "./KanaBoard";
import InputBox from "./InputBox";

function KanaInput() {
  const [inputText, setInputText] = React.useState("インプット");
  
  return(
    <>
      <InputBox key="inputBox" text={inputText} setText={setInputText}/>
      <KanaBoard key="board" text={inputText} setText={setInputText}/>
    </>
  );
}
export default KanaInput;