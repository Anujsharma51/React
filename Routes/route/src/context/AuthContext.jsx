import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [signin, sertSign] = useState(false);

  const handleClick = (check) => {
    sertSign(check);
  };
  return (
    <AuthContext.Provider value={{ signin, handleClick }}>
      {children}
    </AuthContext.Provider>
  );
};
