import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");
  const [start, setstart] = useState(false);

  useEffect(() => {
    let id;
    if (start) {
      id = setInterval(() => {
        setTime((a) => {
          if (a === 0) {
            clearInterval(id);
            setstart(false);
            return time;
          } else {
            clearInterval(id);
            setTime(a - 1);
          }
        });
      }, 1000);
    } else {
      setstart(false);
      // clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [time, start]);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
        <h1>time {time}</h1>
        {start ? (
          <button
            onClick={() => {
              setstart(false);
            }}
          >
            stop
          </button>
        ) : (
          <button
            onClick={() => {
              setstart(true);
            }}
          >
            start
          </button>
        )}
      </div>
    </>
  );
};

export default Timer;
