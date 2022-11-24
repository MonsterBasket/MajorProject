// import image from "../images/main-character.png"
import { useEffect, useState } from "react";

function selectAnimation(x, y, velocity, lastDirection){
  // console.log(velocity)
  const obj = {
    transform: `translate(${x}px, ${y}px) scale(3)`,
  }
  if(Math.abs(velocity[0]) > Math.abs(velocity[1])){
   obj.animationName = velocity[0] > 0 ? "walkRight" : "walkLeft";
  }
  else if(Math.abs(velocity[0]) < Math.abs(velocity[1])){
    obj.animationName = velocity[1] > 0 ? "walkDown" : "walkUp";
  }
  console.log(velocity[0], velocity[1])
  if(Math.abs(velocity[0]) < 0.15 && Math.abs(velocity[1]) < 0.15) {
    if(lastDirection == "KeyW") obj.animationName = "idleUp";
    if(lastDirection == "KeyS") obj.animationName = "idleDown";
    if(lastDirection == "KeyA") obj.animationName = "idleLeft";
    if(lastDirection == "KeyD") obj.animationName = "idleRight";
  }
  return obj
}

function Player({x, y, velocity, lastDirection}){
  const [ref_, refresh] = useState([])

  // console.log(x, y, velocity, lastDirection)
  const style = selectAnimation(x, y, velocity, lastDirection);

  return <div id="player" style={style}></div>
}

export default Player;