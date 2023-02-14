import React, { useEffect, useState } from "react";
import "./SingleResult.css"

function SingleResult({
  result
}) {

  useEffect(() => {
  }, [])

  return (
    <div className="bangumi-result">
      <img async src={result.images.medium} />
      <h2>{result.name}</h2>
      <h3>{result.name_cn}</h3>
      <h3>{result.id}</h3>
    </div>
  );
}
export default SingleResult;