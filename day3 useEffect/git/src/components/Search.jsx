import React, { useState } from "react";
import User from "./User";
import axios from "axios";
const Search = () => {
  const [text, setText] = useState("");

  const [fix, setFix] = useState([]);
  const handleSearch = () => {
    axios
      .get(` https://api.github.com/search/users`, {
        params: {
          q: text,

          per_page: 5,
          page: 1,
        },
      })
      .then((res) => {
        console.log("res:", res);
        setFix(res.data.items);
      });
  };
  const handleSort = () => {
    axios
      .get(` https://api.github.com/search/users`, {
        params: {
          q: text,
          sort: "full_name",
          per_page: 5,
          page: 1,
          direction: "asc",
        },
      })
      .then((res) => {
        console.log("res:", res);
        setFix(res.data.items);
      });
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
        <button onClick={handleSort}>sort</button>
      </div>

      {fix.map((el) => {
        return <User {...el} />;
      })}
    </>
  );
};

export default Search;
