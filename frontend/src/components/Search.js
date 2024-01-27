import React, { useRef, useState } from "react";

const Search = ({ childFunction }) => {
  const [input, setInput] = useState("");
  const value = useRef(null);

  function handleChange() {
    const inputValue = value.current.value;
    setInput(inputValue);
  }

  function handleClick() {
    console.log(input);
    childFunction(input);
  }

  return (
    <div className="search-menu">
      <input
        id="box"
        type="text"
        ref={value}
        value={input}
        onChange={handleChange}
      />
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
