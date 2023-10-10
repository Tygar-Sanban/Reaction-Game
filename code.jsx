import React, { useState, useEffect } from "react";

function ReactionTest() {
  const [canStart, setCanStart] = useState(true);
  const [redSquare, setRedSquare] = useState(false);
  const [greenSquare, setGreenSquare] = useState(false);
  const [missed, setMissed] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [time, setTime] = useState(0);
  const [startDate, setStartDate] = useState(0);

  async function handleClick() {
    setCanStart(false);
    setRedSquare(true);
    setMissed(false);
    setSucceed(false);
  }
  async function handleRedClick() {
    setCanStart(true);
    setRedSquare(false);
    setMissed(true);
  }
  async function handleGreenClick() {
    const currentTime = new Date();
    setTime(currentTime - startDate);
    setCanStart(true);
    setGreenSquare(false);
    setSucceed(true);
  }

  useEffect(() => {
    redSquare &&
      setTimeout(() => {
        setStartDate(new Date());
        setRedSquare(false);
        setGreenSquare(true);
      }, Math.random() * 6000);
  }, [redSquare]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {canStart && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            height: "20vh",
            fontSize: "2rem",
            border: "solid 1px black",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "rgb(40, 40, 40)",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          Start Game
        </div>
      )}
      {redSquare && (
        <div
          onClick={handleRedClick}
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "red",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        ></div>
      )}
      {greenSquare && (
        <div
          onClick={handleGreenClick}
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "green",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        ></div>
      )}
      {missed && (
        <div style={{ margin: "7.5%", fontSize: "2.5rem", fontWeight: "600" }}>
          You clicked too early!
        </div>
      )}
      {succeed && (
        <div style={{ margin: "7.5%", fontSize: "2.5rem", fontWeight: "600" }}>
          You took {time}ms !
        </div>
      )}
    </div>
  );
}

export default ReactionTest;
