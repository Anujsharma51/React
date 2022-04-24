import React, { useEffect, useState } from "react";
import List from "./List";
// import List from "./List";
import Todo from "./Todo";
var p;
var count = 0;
function Todo_functoion() {
  const [page, setpage] = useState(1);
  const [todo, setTodo] = useState([]);

  const addBtn = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const handleDelete = (id) => {
    let new_todo = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(new_todo);
  };
  const edit = (data) => {
    console.log("data:", data);
    let new_todo = todo.map((item) => {
      if (item.id === data.id) return data;
      else return item;
    });
    setTodo(new_todo);
  };

  useEffect(() => {
    const getdata = async () => {
      let response = await fetch(`http://localhost:3000/todo?_page=${page}`);
      let response1 = await fetch(`http://localhost:3000/todo`);
      let data1 = await response1.json();
      p = data1.length / 10;
      let data = await response.json();

      setTodo(data);
    };
    getdata();
  }, [page]);

  return (
    <>
      {page}
      <Todo addBtn={addBtn} />
      {todo.map((item) => {
        return (
          <List
            key={item.id}
            todo={item}
            handleDelete={handleDelete}
            edit={edit}
          />
        );
      })}
      <button
        onClick={() => {
          if (page > 1) {
            setpage(page - 1);
          }
        }}
        disabled={page === 1}
      >
        previous
      </button>

      <button
        onClick={() => {
          // console.log(p.length);
          count++;
          if (count >= p) {
            return;
          }

          setpage(page + 1);
        }}
      >
        next
      </button>
    </>
  );
}

export default Todo_functoion;
