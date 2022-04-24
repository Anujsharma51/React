// import React, { useState } from "react";
import { useState } from "react";
import styles from "./Todo.module.css";
function List({ todo, handleDelete, edit }) {
  const [editable, seteditable] = useState(false);
  const [value, setvalue] = useState(todo.value);
  const deleteTodo = async () => {
    await fetch(`http://localhost:3000/todo/${todo.id}`, {
      method: "DELETE",

      headers: { "content-Type": "application/json" },
    });

    handleDelete(todo.id);
  };
  /////edit////////////////////////////////
  const edit1 = async () => {
    let response = await fetch(`http://localhost:3000/todo/${todo.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        value,
      }),
    });
    let data = await response.json();
    edit(data);
    seteditable(false);
  };

  /////////////////update///////

  return (
    <div className={styles.list}>
      {todo.value}

      {editable ? (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <button onClick={edit1}>update</button>
        </>
      ) : (
        ""
      )}
      <button onClick={() => seteditable(!editable)}>edit</button>

      <button onClick={deleteTodo}>delete</button>
    </div>
  );
}

export default List;
