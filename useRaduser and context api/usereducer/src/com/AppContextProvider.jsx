import React, { createContext, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("light");

  const toggleTheme = () => {
    state === "light" ? setState("dark") : setState("light");
  };
  return (
    <AppContext.Provider value={[toggleTheme]}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
