import React, { useState } from "react";
import styles from "./addTask.module.css";
// import Tasks from "../Tasks/Tasks";
import Tasks from "../Tasks/Tasks";
import data from "../../data/tasks.json";

const AddTask = () => {
  const [text, setText] = useState("");
  // NOTE: do not delete `data-cy` key value pair
  const [todo, setTodo] = useState(data);
  const handleClick = () => {
    setTodo([
      ...todo,
      {
        text: text,
        done: false,
        count: 1,
      },
    ]);
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button data-cy="add-task-button" onClick={handleClick}>
        +
      </button>
      <Tasks todo={todo} />
    </div>
  );
};

export default AddTask;
