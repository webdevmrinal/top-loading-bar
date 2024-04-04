import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App({ width, color, position }) {
  const top = position === "top" ? 0 : "auto";
  const bottom = position === "bottom" ? 0 : "auto";
  return (
    <div
      className="upper-bar"
      style={{
        "--width": `${width}%`,
        backgroundColor: color,
        "--top": top,
        "--bottom": bottom,
      }}
    ></div>
  );
}

export default App;
