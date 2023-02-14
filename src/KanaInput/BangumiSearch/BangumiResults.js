import React, { useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import "./BangumiResults.css"

function BangumiResults({
  results
}) {

  const [localResults, setResults] = useState(results);

  const result = {
    "id": 375735,
    "url": "http://bgm.tv/subject/375735",
    "type": 2,
    "name": "恋愛フロップス",
    "name_cn": "恋爱FLOPS",
    "summary": "",
    "air_date": "",
    "air_weekday": 0,
    "images": {
      "large": "http://lain.bgm.tv/pic/cover/l/ac/ba/375735_AR8Al.jpg",
      "common": "http://lain.bgm.tv/pic/cover/c/ac/ba/375735_AR8Al.jpg",
      "medium": "http://lain.bgm.tv/pic/cover/m/ac/ba/375735_AR8Al.jpg",
      "small": "http://lain.bgm.tv/pic/cover/s/ac/ba/375735_AR8Al.jpg",
      "grid": "http://lain.bgm.tv/pic/cover/g/ac/ba/375735_AR8Al.jpg"
    }
  };

  function getResults() {
    if (Array.isArray(localResults)) {
      return (localResults.map((result) => {
        console.log(result);
        return <SingleResult result={result} />;
      }));
    }
    return;
  }

  useEffect(() => {
    setResults(results);
  }, [results])

  return (
    <div className="results-wrapper">
      {getResults()}
    </div>
  );
}
export default BangumiResults;