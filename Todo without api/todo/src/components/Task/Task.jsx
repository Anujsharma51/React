import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{props.text}</div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button">x</button>
    </li>
  );
};

export default Task;
