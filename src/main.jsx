import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Body from "./Body";

const colorPresets = ["#fc59a3", "#87c830", "#ffd400", "#fe7e0f", "#8e3ccb"];

const Root = () => {
  const [width, setWidth] = useState(0);
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState("top");
  const [color, setColor] = useState("#ff4500");
  const changeWidth = (newWidth) => {
    if (width >= 100) setWidth(10);
    else setWidth((width) => width + newWidth);
  };

  const changeDirection = () => {
    setDirection((prevDirection) => {
      if (prevDirection === 1) {
        return -1;
      } else return 1;
    });
  };

  const resetWidth = () => {
    setWidth(0);
  };

  // function getRandomColor() {
  //   const red = Math.floor(Math.random() * 256);
  //   const green = Math.floor(Math.random() * 256);
  //   const blue = Math.floor(Math.random() * 256);

  //   const color =
  //     "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  //   return color;
  // }

  const changeColor = () => {
    // const randomColor = getRandomColor();
    const randomIndex = Math.floor(Math.random() * colorPresets.length);
    console.log("random index", randomIndex, colorPresets[randomIndex]);
    setColor(colorPresets[randomIndex]);
  };

  console.log("width", width);
  console.log("direction", direction);
  return (
    <React.StrictMode>
      <App
        width={width}
        color={color}
        position={position}
        direction={direction}
      />
      <Body
        resetWidth={resetWidth}
        changeWidth={changeWidth}
        changeColor={changeColor}
        color={color}
        setPosition={setPosition}
        setDirection={changeDirection}
      />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
