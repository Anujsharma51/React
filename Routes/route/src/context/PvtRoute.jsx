import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PvtRoute = ({ children }) => {
  const { signin } = useContext(AuthContext);
  if (!signin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PvtRoute;
