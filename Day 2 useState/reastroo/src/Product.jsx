import React from "react";

const Product = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          border: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={props.image} alt="" />
        </div>

        <div>
          <h3>{props.restaurantName}</h3>
          <p>
            {props.categories.map((el) => {
              return el + " ";
            })}
          </p>
          <div>
            <p>min $ {props.min}</p>
            <p>Upto 30 min</p>
            <p>
              {props.payment.map((el) => {
                return el + " ";
              })}
            </p>
          </div>
        </div>
        <div>
          <p>{props.rating}</p>
          <p>{props.votes} votes</p>
          <p>{props.review} review</p>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          textAlign: "end",
        }}
      >
        <button style={{ padding: "5px" }}>Order Online {`>`}</button>
      </div>
    </div>
  );
};

export default Product;
