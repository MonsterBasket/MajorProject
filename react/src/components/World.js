import { useEffect, useState } from "react";
import './map.css';
import './player.css';
import World0101 from "./maps/World0101"
import Player from "./Player"

function World(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastDirection, setDirection] = useState("");
  const [velocityState, setVel] = useState([0,0])
  let velocity = [0,0];
  let keys = [];
  const maxSpeed = 3;
  const mapSize = [40,23]; //I'll extract this from individual map details later

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
    keys[e.code] = true;
  }
  function keyUp(e){
    keys[e.code] = false;
    setDirection(e.code);
  }

  function handleInput(){
    // const newVelocity=[...velocity]
    if(keys["KeyA"] || keys["KeyD"] || keys["KeyS"] || keys["KeyW"]){
      if(keys["KeyA"] && velocity[0] > -maxSpeed) velocity[0] -= 0.15;
      if(keys["KeyD"] && velocity[0] <  maxSpeed) velocity[0] += 0.15;
      if(keys["KeyS"] && velocity[1] <  maxSpeed) velocity[1] += 0.15;
      if(keys["KeyW"] && velocity[1] > -maxSpeed) velocity[1] -= 0.15;
    }
    if(!keys["KeyA"] && !keys["KeyD"]){
      if(Math.abs(velocity[0]) < 0.1) velocity[0] = 0;
      if(velocity[0] < 0) velocity[0] += 0.1;
      if(velocity[0] > 0) velocity[0] -= 0.1;
    } 
    if(!keys["KeyW"] && !keys["KeyS"]){
      if(Math.abs(velocity[1]) < 0.1) velocity[1] = 0;
      if(velocity[1] < 0) velocity[1] += 0.1;
      if(velocity[1] > 0) velocity[1] -= 0.1;
    }
  }

  function gameLoop() {
    handleInput();
    if(velocity[0]) setX(prev => prev + velocity[0])
    if(velocity[1]) setY(prev => prev + velocity[1])
    setVel(velocity || [0,0])
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
      <Player x={x} y={y} velocity={velocityState} lastDirection={lastDirection}/>
    </div>
  </div>
}

export default World;