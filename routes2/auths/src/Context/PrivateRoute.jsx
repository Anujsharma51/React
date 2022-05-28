import React, { Children, useContext } from "react";

const PrivateRoute = () => {
  const [isAuth] = useContext(false);

  if (isAuth) {
    return Children;
  }
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
