import { useReducer } from "react";
import "./App.css";
const init = { count: 0, name: "gajraj" };
const reducer = (state, action) => {
  if (action.type === "count") {
    return { ...state, count: state.count + action.paylord };
  } else if (action.type === "name") {
    return { ...state, name: action.paylord };
  }
  return state;
};
function App() {
  const [state, dispatch] = useReducer(reducer, init);
  const handleClick = () => {
    dispatch({ type: "count", paylord: 1 });
  };
  console.log("state:", state);

  // console.log("state:", state);
  return (
    <div className="App">
      <button onClick={handleClick}>wqdwq</button>
      <button
        onClick={() => {
          dispatch({ type: "name", paylord: "anuj" });
        }}
      >
        defef
      </button>
      {state.count}
    </div>
  );
}

export default App;
