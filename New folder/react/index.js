import { myUseState, MyReact } from "./react.js";

const MyComponent = () => {
  let [state, setState] = myUseState(1);

  setState((state) => state + 2);
  setState((state) => state + 2);
  setState((state) => state + 2);
  console.log(state);
};

const myReact = new MyReact();

myReact.render(MyComponent);
