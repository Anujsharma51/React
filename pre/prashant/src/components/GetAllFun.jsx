function GetAllFun({ tod }) {
  console.log("todo:", tod);
  return (
    <div>
      {tod.value}
      <button>delete</button>
      <button>edit</button>
    </div>
  );
}

export default GetAllFun;
