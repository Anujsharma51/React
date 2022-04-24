import { useEffect, useState } from "react";
import GetAllFun from "./GetAllFun";
import TodoInput from "./TodoInput";

function Todo() {
  const [todo, setTodo] = useState([]);

  const getData = async () => {
    let response = await fetch(`http://localhost:3000/todo`);
    let data = await response.json();
    setTodo(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <TodoInput />
      {todo.map((item) => {
        return <GetAllFun tod={item} />;
      })}
    </>
  );
}

export default Todo;
