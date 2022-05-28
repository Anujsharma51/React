import "./App.css";
import Button1 from "./com/Button1";
import { useContext } from "react";
import { AppContext } from "./com/AppContextProvider";
function App() {
  const [toggleTheme] = useContext(AppContext);
  return (
    <div className="App">
      <Button1 text="theam" />

      <button onClick={toggleTheme}>toogle</button>
    </div>
  );
}

export default App;
