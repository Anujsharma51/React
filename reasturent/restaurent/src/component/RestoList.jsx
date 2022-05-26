// import React, { useState } from "react";
import data from "../db.json";
import styled from "./res.module.css";
const RestoList = ({ rating, sortt }) => {
  return (
    <>
      <div className={styled.main}>
        {data
          .filter((item) => item.rating >= rating)
          .sort((a, b) =>
            sortt === "lh"
              ? a.cost_for_two - b.cost_for_two
              : sortt === "hl"
              ? b.cost_for_two - a.cost_for_two
              : a.id - b.id
          )

          .map((el) => {
            return (
              <div key={el.id} className={styled.list}>
                <div>
                  <img src={el.image} alt={"a"} />
                  <p>name{el.restaurantName}</p>
                  <p>rating {el.rating}</p>
                  <p>{el.cost_for_two}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RestoList;
