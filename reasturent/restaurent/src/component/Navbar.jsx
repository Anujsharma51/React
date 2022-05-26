// import React, { useState } from "react";
import styled from "./res.module.css";
export const Navbar = ({ setRating, handleSort, sort }) => {
  const handleChange = (e) => {
    console.log("e:", e.target.value);
    setRating(e.target.value);
  };

  return (
    <>
      <div className={styled.nav}>
        <select onChange={(e) => handleChange(e)}>
          <option value="1">1★ above</option>
          <option value="2">2★ above </option>
          <option value="3">3★ above</option>
          <option value="4">4★ above</option>
        </select>
        <select onChange={(e) => handleSort(e)}>
          <option>default</option>
          <option value="lh">Low to high</option>
          <option value="hl">high to low</option>
        </select>
      </div>
    </>
  );
};
