import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [Stop, setStop] = useState(0);
  const [temp, settemp] = useState(true);

  useEffect(() => {
    let id;
    id = setInterval(() => {
      if (temp === false) {
        return Stop;
      } else {
        clearInterval(id);
        setStop((a) => {
          return a + 1;
        });
      }
      return () => clearInterval(id);
    }, 1000);
  }, [Stop, temp]);
  return (
    <>
      <div>{Stop}</div>
      <button onClick={() => settemp(true)}>start</button>
      <button onClick={() => settemp(false)}>stop</button>
    </>
  );
};

export default Stopwatch;
