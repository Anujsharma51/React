// import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const params = useParams();
  console.log("params:", params);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${params.id}`).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div>{data.first_name}</div>
        <div>{data.last_name}</div>
        <img src={data.avatar} alt="a" />
      </div>
    </div>
  );
};

export default UserList;
