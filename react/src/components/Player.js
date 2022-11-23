// import image from "../images/main-character.png"
import { useEffect, useState } from "react";

function selectAnimation(x, y, velocityX, velocityY, lastDirection){
  const obj = {
    transform: `translate(${x}px, ${y}px) scale(3)`,
    animationName: ""
  }
  if(velocityX == 0 && velocityY == 0){
    if(lastDirection == "KeyW") obj.animationName = "idleUp";
    if(lastDirection == "KeyS") obj.animationName = "idleDown";
    if(lastDirection == "KeyA") obj.animationName = "idleLeft";
    if(lastDirection == "KeyD") obj.animationName = "idleRight";
  }
  else if(Math.abs(velocityX) > Math.abs(velocityY)){
   obj.animationName = velocityX > 0 ? "walkRight" : "walkLeft";
  }
  else if(Math.abs(velocityX) < Math.abs(velocityY)){
    obj.animationName = velocityY > 0 ? "walkDown" : "walkUp";
  }
  return obj
}

function Player({x, y, velocityX, velocityY, lastDirection}){
  console.log(x, y, velocityX, velocityY, lastDirection)
  const style = selectAnimation(x, y, velocityX, velocityY, lastDirection);

  return <div id="player" style={style}></div>
}

export default Player;