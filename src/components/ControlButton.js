import React from "react";
import "./control-button.css";

const ControlButton = (props) => {
  const startButton = (
    <div className="btn btn-start btn-one" onClick={props.handleStart}>
      Start
    </div>
  );

  const ActiveButton = (
    <div className="btn btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="Control-button">
      <div>{props.active ? ActiveButton : startButton}</div>
    </div>
  );
};

export default ControlButton;
