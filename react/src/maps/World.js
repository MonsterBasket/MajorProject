import { useEffect, useState } from "react";
import '../css/map.css';
import '../css/player.css';
import WorldTiler from "./WorldTiler"
import map from "./maps"
import Player from "../characters/Player"
import Enemy from "../characters/Enemy"
import handleInput from "../helpers/handleInput";

let velocity = [0,0];

function World(){
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);
  const [lastDirection, setDirection] = useState("KeyS"); //sets initial animation to "idleDown"
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
    left: `clamp(${window.innerWidth - (mapSize[0] * 48)}px, ${-x + window.innerWidth / 2}px, 0px)`,
    top: `clamp(${window.innerHeight - (mapSize[1] * 48)}px, ${-y + window.innerHeight / 2}px, 0px)`
  }

  return <div id="world" style={worldMover}>
      <WorldTiler coords={map("0101")}>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
        <Player pos={[x, y]} velocity={velocity} lastDirection={lastDirection}/>
      </WorldTiler>
    <div style={{position: "absolute", color: "white"}}>X: {x} - mapSize[0]: {mapSize[0] * 48}</div>
  </div>
}

export default World;