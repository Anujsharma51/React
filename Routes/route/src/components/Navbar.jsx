import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/countct">contect</Link>
      <Link to="/user">user</Link>

      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Navbar;
