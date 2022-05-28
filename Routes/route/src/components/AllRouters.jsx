import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";

import Contect from "./Contect";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import User from "./User";
import UserList from "./UserList";
const AllRouters = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/countct" element={<Contect />}></Route>
        <Route path="login/*" element={<Login />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="user/:id" element={<UserList />}></Route>
      </Routes>
    </>
  );
};

export default AllRouters;
