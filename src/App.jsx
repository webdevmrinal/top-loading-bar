import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App({ width, color }) {
  return <div className="upper-bar" style={{ "--width": `${width}%`, backgroundColor: color}}></div>;
}

export default App;
