import React, { useState } from "react";
import data from "./db.json";
import Product from "./Product";
import styled from "./Pro.module.css";

const RestaurantDetails = () => {
  const [new_data, setNew_data] = useState(data);

  const handleClickLH = () => {
    data.sort(function (a, b) {
      return a.rating - b.rating;
    });
  };

  return (
    <>
      <button onClick={handleClickLH}>low to high</button>

      <div id={styled.main}>
        {new_data.map((el) => {
          return <Product {...el} key={el.id} />;
        })}
      </div>
    </>
  );
};

export default RestaurantDetails;
