import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { signin, handleClick } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <h1>
      <button
        onClick={() => {
          handleClick(true);

          return navigate("/user");
        }}
      >
        sign-in
      </button>
      <button
        onClick={() => {
          navigate("sign-up");
        }}
      >
        sign-un
      </button>
      <button
        onClick={() => {
          navigate("sign-in-google");
        }}
      >
        sign-with google
      </button>
      <Outlet />
    </h1>
  );
};

export default Login;
