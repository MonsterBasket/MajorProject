import { useEffect, useState } from "react";
import World0101 from "./maps/World0101"

function MapMaker(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleInput);
    return () => {window.removeEventListener("keydown", handleInput);};
  }, [])

  function handleInput(e){
    if(e.key === "ArrowRight") return setX(prev=>prev - 16);
    if(e.key === "ArrowLeft") return setX(prev=>prev + 16);
    if(e.key === "ArrowUp") return setY(prev=>prev + 16);
    if(e.key === "ArrowDown") setY(prev=>prev - 16);
  }

  const movingMap = {
    position: "absolute",
    display: "grid",
    left: `${x}px`,
    top: `${y}px`,
    gridTemplateColumns: "repeat(40, 48px)",
    gridTemplateRows: "repeat(23, 48px)",
    justifyItems: "center",
    alignItems: "center",
    overflow: "hidden",
    transition: "all 0.3s"
  }
  const parentStyle = {
    position: "absolute",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    background: "black",
    overflow: "hidden",
  }

  return <div style={parentStyle}>
    <div style={movingMap}>
        <World0101 />
    </div>
  </div>
}

export default MapMaker;