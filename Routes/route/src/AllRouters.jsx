import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contect from "./Contect";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import UserList from "./UserList";

const AllRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/countct" element={<Contect />}></Route>
        <Route path="user" element={<User />}>
          <Route path="/user/:id" element={<UserList />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AllRouters;
