import { useState, useEffect } from "react";
import ControlButton from "./ControlButton";
import Timer from "./Timeer";
import "./stop-watch.css";

const Stopwatch = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setCounter(() => counter + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePaused = () => {
    setIsPaused(true);
    setIsActive(false);
  };

  const handleReset = () => {
    setCounter(0);
    setIsActive(!false);
  };

  return (
    <div className="stop-watch">
      {/* <h1>counter:{counter}</h1>
      <button onClick={handleClick}>{}Start</button>
      <button onClick={hendleReset}>Restar</button>
      <button onClick={handlePaused}>Push</button> */}
      <Timer counter={counter} />

      <ControlButton
        active={isActive}
        isActive={isPaused}
        handleReset={handleReset}
        handleStart={handleStart}
        handlePauseResume={handlePaused}
      />
    </div>
  );
};

export default Stopwatch;
