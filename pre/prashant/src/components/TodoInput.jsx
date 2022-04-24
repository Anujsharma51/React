import React, { useState } from "react";

function TodoInput({ add }) {
  const [todo, setTodo] = useState("");
  const handleClick = async () => {
    let response = await fetch(`http://localhost:3000/todo`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        value: todo,
      }),
    });
    let data = await response.json();
    console.log("data:", data);
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        add
      </button>
    </div>
  );
}

export default TodoInput;
