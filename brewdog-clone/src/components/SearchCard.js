import React, { useState } from "react";

function SearchCard({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search__header">
      <form>
        <h2>Search here:</h2>
        <input
          className="input"
          placeholder="___"
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default SearchCard;
