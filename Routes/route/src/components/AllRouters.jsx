// import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PvtRoute from "../context/PvtRoute";
import { Google } from "../pages/Google";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "./About";

import Contect from "./Contect";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import User from "./User";
import UserList from "./UserList";
const AllRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/countct" element={<Contect />}></Route>
        <Route path="login" element={<Login />}>
          <Route path="sign-in" element={<SignIn />}></Route>

          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="sign-in-google" element={<Google />}></Route>
        </Route>
        <Route
          path="user"
          element={
            <PvtRoute>
              <User />
            </PvtRoute>
          }
        ></Route>
        <Route path="user/:id" element={<UserList />}></Route>
        <Route path="/*" element={<div>4040</div>}></Route>
      </Routes>
    </>
  );
};

export default AllRouters;
