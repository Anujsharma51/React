import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import data from "../../data/tasks.json";
import Counter from "../Counter/Counter";

const Tasks = (props) => {
  console.log("props:", props.todo);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {props.todo.map((el) => {
          return <Task {...el} />;
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
