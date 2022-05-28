import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Google } from "../pages/Google";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Login = () => {
  const navigate = useNavigate();
  return (
    <h1>
      <button
        onClick={() => {
          navigate("sign-in");
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

      <Routes>
        <Route path="sign-in" element={<SignIn />}></Route>

        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="sign-in-google" element={<Google />}></Route>
      </Routes>
    </h1>
  );
};

export default Login;
