import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import RestaurantDetails from "./RestaurantDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="post" element={<Form />}></Route>
      </Routes>
      <RestaurantDetails />
    </div>
  );
}

export default App;
