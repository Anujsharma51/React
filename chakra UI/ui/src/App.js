import "./App.css";
// import { Divider } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Grid
        templateColumns="30% 40% 30%"
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <GridItem h="200" bg="blue.500" />
        <GridItem h="200" bg="orange" />

        <GridItem h="200" bg="red" />
      </Grid>
    </div>
  );
}

export default App;
