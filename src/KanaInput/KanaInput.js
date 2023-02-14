import React, { useEffect, useState } from "react";
import KanaBoard from "./KanaBoard";
import InputBox from "./InputBox/InputBox";
import InputBoxLocal from "./InputBox/InputBoxLocal";
import BangumiResults from "./BangumiSearch/BangumiResults";
import "./KanaInput.css";

function KanaInput({
  kuroshiro,
  setKuroShiro,
  ready,
  setReady,
  local,
  board,
  placeholder,
}) {

  const [inputText, setInputText] = useState(placeholder || "インプット");
  const [results, setResults] = useState({});

  useEffect(() => {
    if (placeholder !== "インプット") {
      const url = "https://api.bgm.tv/search/subject/" + encodeURIComponent(placeholder) + "?type=2&responseGroup=small";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.list);
          console.log(data.list);
        });
    }
  }, [])

  return (
    <>
      {local ?
        <InputBoxLocal key="inputBox" text={inputText} setText={setInputText} />
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
      {board && <KanaBoard key="board" text={inputText} setText={setInputText} />}
      <BangumiResults results={results} />
    </>
  );
}
export default KanaInput;