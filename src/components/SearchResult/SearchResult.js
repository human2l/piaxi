import React from "react";
import ResultItem from "./ResultItem/ResultItem";

const SearchResult = (props) => {
  return (
    <div>
      <p>SearchResult</p>
      <ResultItem info={["aaa", "bbb"]} />
    </div>
  );
};

export default SearchResult;
