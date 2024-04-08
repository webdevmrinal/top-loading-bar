import React from "react";
import Spinner from "./Spinner";

function Body({
  changeWidth,
  resetWidth,
  changeColor,
  color,
  setPosition,
  setDirection,
}) {
  const buttonStyle = {
    padding: "1em 3em",
    margin: "0 2em",
    color: color,
    background: "transparent",
    border: `1px solid ${color}`,
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "1.3em",
    transition: "all 500ms ease-in-out",
  };
  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        padding: "1em 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <div>
        <button onClick={() => changeWidth(10)} style={buttonStyle}>
          Add 10%
        </button>
        <button onClick={() => resetWidth()} style={buttonStyle}>
          {" "}
          Reset Button
        </button>
        <button
          onClick={() => {
            changeColor();
          }}
          style={buttonStyle}
        >
          Randomize color
        </button>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            color: "wheat",
            padding: "1em 0",
            fontSize: "1.5em",
          }}
        >
          Bar Position
        </div>
        <button style={buttonStyle} onClick={() => setPosition("top")}>
          Top
        </button>
        <button style={buttonStyle} onClick={() => setPosition("bottom")}>
          Bottom
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => {
            setDirection();
          }}
        >
          Change Direction
        </button>
      </div>
      <Spinner />
    </div>
  );
}

export default Body;
