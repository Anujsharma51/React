import React, { useState } from "react";
import { Navbar } from "./Navbar";
import RestoList from "./RestoList";

const RestaurantDetails = () => {
  const [rating, setRating] = useState(1);

  const [sortt, setsort] = useState("default");
  const handleSort = (e) => {
    console.log("e:", e.target.value);
    setsort(e.target.value);
  };
  return (
    <>
      <Navbar setRating={setRating} handleSort={handleSort} sortt={sortt} />
      <RestoList rating={rating} sortt={sortt} />
    </>
  );
};

export default RestaurantDetails;
