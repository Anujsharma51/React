import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/countct">contect</Link>
      <Link to="/user">user</Link>
    </div>
  );
};

export default Navbar;
