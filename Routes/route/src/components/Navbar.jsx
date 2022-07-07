import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuth, handleClick } = useContext(AuthContext);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/countct">contect</Link>
      <Link to="/user">user</Link>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => handleClick(false)}>logout</button>
    </div>
  );
};

export default Navbar;
