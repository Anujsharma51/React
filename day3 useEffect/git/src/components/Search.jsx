import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const handleSearch = async () => {
    let res = await fetch(
      `https://api.github.com/search/users?q="anujsharma51"`
    );

    let data = await res.json();
    console.log("data:", data);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default Search;
