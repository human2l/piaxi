import React from "react";
const SearchItem = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <input placeholder={props.name}></input>
    </div>
  );
};

export default SearchItem;
