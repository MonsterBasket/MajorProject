import { useEffect, useState } from "react";
import './map.css';
import './player.css';
import World0101 from "./maps/World0101"
import Player from "./Player"

function MapMaker(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mapSize = [40,23]; //I'll extract this from individual map details later

  useEffect(() => {
    window.addEventListener("keydown", handleInput);
    return () => {window.removeEventListener("keydown", handleInput);};
  }, [])

  function handleInput(e){
    if(e.key === "ArrowRight") return setX(prev=>prev + 16);
    if(e.key === "ArrowLeft") return setX(prev=>prev - 16);
    if(e.key === "ArrowUp") return setY(prev=>prev - 16);
    if(e.key === "ArrowDown") setY(prev=>prev + 16);
  }
  const worldMover = {
    left: `${0}px`,
    top: `${0}px`
  }
  const mapGrid = {
    gridTemplateColumns: `repeat(${mapSize[0]}, 48px)`,
    gridTemplateRows: `repeat(${mapSize[1]}, 48px)`
  }

  return <div id="world" style={worldMover}>
    <div className="mapGrid" style={mapGrid}>
        <World0101 />
    </div>
    <div>
      <Player />
    </div>
  </div>
}

export default MapMaker;