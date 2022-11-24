import { useEffect, useState } from "react";
import './map.css';
import './player.css';
import World0101 from "./maps/World0101"
import Player from "./Player"
import Enemy from "./Enemy"
import handleInput from "./handleInput";

let velocity = [0,0];

function World(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastDirection, setDirection] = useState("");
  let myKeys = [];
  const maxSpeed = 3;
  const mapSize = [40,23]; //I'll extract this from individual map details later
  const [re, refresh] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp );
    gameLoop();
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [])

  function keyDown(e){
    myKeys[e.code] = true;
  }
  function keyUp(e){
    myKeys[e.code] = false;
    setDirection(e.code);
  }

  function gameLoop() {
    handleInput(myKeys, velocity, maxSpeed);
    if(velocity[0]) setX(prev => prev + velocity[0]);
    if(velocity[1]) setY(prev => prev + velocity[1]);
    if(Math.abs(velocity[0]) < 0.1 && Math.abs(velocity[1]) < 0.1) refresh([]); 
    requestAnimationFrame(gameLoop);
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
      <Enemy type="skeleton" posInit={[200,500]} patrol={[[100,300],[400,600]]} randomPath={true}/>
      <Player pos={[x,y]} velocity={velocity} lastDirection={lastDirection}/>
    </div>
  </div>
}

export default World;