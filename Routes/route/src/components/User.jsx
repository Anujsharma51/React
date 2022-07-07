import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=1`).then((res) => {
      //   console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <>
      user
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.avatar} alt="a" />
            <div>{el.first_name}</div>
            <div>{el.last_name}</div>
            <Link to={`${el.id}`}>see more</Link>
          </div>
        );
      })}
    </>
  );
};

export default User;
