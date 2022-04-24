import React, { useState } from "react";

function Todo({ addBtn }) {
  const [todo, setTodo] = useState("");

  const handleClick = async () => {
    let response = await fetch(`http://localhost:3000/todo/`, {
      method: "POST",
      headers: { "content-Type": "application/json" },

      body: JSON.stringify({
        value: todo,
      }),
    });

    let data = await response.json();

    addBtn(data);
    setTodo("");
  };

  const add = (e) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <input
        value={todo}
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyPress={add}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        +
      </button>
    </div>
  );
}

export default Todo;
