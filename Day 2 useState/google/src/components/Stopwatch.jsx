import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const start = useRef();
  const [time, setTime] = useState(0);
  const handleClick = () => {
    start.current = setInterval(() => {
      setTime((prv) => {
        return prv + 1;
      });
    }, 1000);
  };
  useEffect(() => {
    return () => {
      clearInterval(start.current);
    };
  }, []);
  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleClick}>start</button>
    </>
  );
};

export default Stopwatch;
