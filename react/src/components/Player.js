// import image from "../images/main-character.png"
import { useEffect, useState } from "react";

function Player(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  let keys = [];
  let velocity = [0,0];
  const maxSpeed = 3;

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
  }

  function handleInput(){
    if(keys["KeyA"] && velocity[0] > -maxSpeed) velocity[0] -= 0.15;
    if(keys["KeyD"] && velocity[0] <  maxSpeed) velocity[0] += 0.15;
    if(keys["KeyS"] && velocity[1] <  maxSpeed) velocity[1] += 0.15;
    if(keys["KeyW"] && velocity[1] > -maxSpeed) velocity[1] -= 0.15;
    if(!keys["KeyA"] && !keys["KeyD"]){
      if((velocity[0] < 0.1 && velocity[0] > 0) || (velocity[0] > -0.1 && velocity[0] < 0)) velocity[0] = 0;
      if(velocity[0] < 0) velocity[0] += 0.1;
      if(velocity[0] > 0) velocity[0] -= 0.1;
    } 
    if(!keys["KeyW"] && !keys["KeyS"]){
      if((velocity[1] < 0.1 && velocity[1] > 0) || (velocity[1] > -0.1 && velocity[1] < 0)) velocity[1] = 0;
      if(velocity[1] < 0) velocity[1] += 0.1;
      if(velocity[1] > 0) velocity[1] -= 0.1;
    } 
  }

  function gameLoop() {
    handleInput();
    if(velocity[0]) setX(prev => prev + velocity[0])
    if(velocity[1]) setY(prev => prev + velocity[1])
    requestAnimationFrame(gameLoop);
  }

  const characterMover = {
    transform: `translate(${x}px, ${y}px) scale(3)`
  }

  return <div id="player" style={characterMover}></div>
}

export default Player;