import React from "react";

const ResultItem = (props) => {
  return (
    <div>
      <p>{props.info.join(" ")}</p>
    </div>
  );
};

export default ResultItem;
