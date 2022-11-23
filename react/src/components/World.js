import { useEffect, useState } from "react";
import './map.css';
import './player.css';
import World0101 from "./maps/World0101"
import Player from "./Player"

function MapMaker(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastDirection, setDirection] = useState("");
  const [velocityX, setVelX] = useState(0)
  const [velocityY, setVelY] = useState(0)
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
    if(keys["KeyA"] && velocityX > -maxSpeed) setVelX(prev => prev -= 0.15);
    if(keys["KeyD"] && velocityX <  maxSpeed) setVelX(prev => prev += 0.15);
    if(keys["KeyS"] && velocityY <  maxSpeed) setVelY(prev => prev += 0.15);
    if(keys["KeyW"] && velocityY > -maxSpeed) setVelY(prev => prev -= 0.15);
    if(!keys["KeyA"] && !keys["KeyD"]){
      if((velocityX < 0.1 && velocityX > 0) || (velocityX > -0.1 && velocityX < 0)) setVelX(0);
      if(velocityX < 0) setVelX(prev => prev += 0.1);
      if(velocityX > 0) setVelX(prev => prev -= 0.1);
    } 
    if(!keys["KeyW"] && !keys["KeyS"]){
      if((velocityY < 0.1 && velocityY > 0) || (velocityY > -0.1 && velocityY < 0)) setVelY(0);
      if(velocityY < 0) setVelY(prev => prev += 0.1);
      if(velocityY > 0) setVelY(prev => prev -= 0.1);
    } 
  }

  function gameLoop() {
    handleInput();
    if(velocityX) setX(prev => prev + velocityX)
    if(velocityY) setY(prev => prev + velocityY)    
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
      <Player x={x} y={y} velocityX={velocityX} velocityY={velocityY} lastDirection={lastDirection}/>
    </div>
  </div>
}

export default MapMaker;