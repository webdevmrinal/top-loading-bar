import React from "react";
import Spinner from "./Spinner";

function Body({ changeWidth, resetWidth, changeColor, color }) {
  const buttonStyle = {
    padding: "1em 3em",
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
      <div style={{ display: "flex", gap: "2em" }}>
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
      <Spinner />
    </div>
  );
}

export default Body;
