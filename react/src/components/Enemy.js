import { useEffect, useState } from "react";
import handleInput from "./handleInput";
import selectAnimation from "./selectAnimation"

let pathCounter = 0;
let myKeys = [];
let maxSpeed = 1.5;
let velocity = [0,0];

function makePath(waitTime, setWaitTime, patrol, target, setTarget, randomPath){
  debugger;
  let nextPathTime = Math.random(5000, 10000)
  if(waitTime > 0) {
    setTimeout(makePath, waitTime);
    setWaitTime(0);
    return;
  }
  if(randomPath){
    setTarget([Math.random(patrol[0][0], patrol[0][1]), Math.random(patrol[1][0], patrol[1][1])])
    console.log("patrol" - patrol[0][0])
    setWaitTime(Math.random(3000, 6000))
  }
  else{
    setTarget(patrol[pathCounter])
    pathCounter++;
    if(pathCounter > patrol.length) pathCounter = 0;
    if(target[2]) nextPathTime = target[2]
  }
  setTimeout(makePath, target[2] || nextPathTime)
}

function Enemy({type, posInit, patrol, randomPath}){
  const [pos, setPos] = useState(posInit)
  const [velocityState, setVel] = useState([0,0])
  const [lastDirection, setDirection] = useState("KeyS")
  const [target, setTarget] = useState(posInit);
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    gameLoop();
    makePath(waitTime, setWaitTime, patrol, target, setTarget, randomPath);
  }, [])

  function gameLoop(){
    handleInput(myKeys, velocity, maxSpeed)
    if(pos[0] != target[0] && [pos][1] != target[1]) walk()
    if(velocity[0] || velocity[1]) setPos(velocity)
    setVel(velocity)
    requestAnimationFrame(gameLoop);
  }

  function walk(){
    if(target[0] - pos[0] < 5) myKeys["KeyD"] = true;
    else {
      myKeys["KeyD"] = false;
      setDirection("KeyD")
    }
    if(pos[0] - target[0] < 5) myKeys["KeyA"] = true;
    else {
      myKeys["KeyA"] = false;
    setDirection("KeyA")
    }
    if(target[1] - pos[1] < 5) myKeys["KeyW"] = true;
    else {
      myKeys["KeyW"] = false;
    setDirection("KeyW")
    }
    if(pos[1] - target[1] < 5) myKeys["KeyS"] = true;
    else {
      myKeys["KeyS"] = false;
    setDirection("KeyS")
    }
  }

  const style = selectAnimation(pos, velocityState, lastDirection);

  return <div className={`${type} character`} style={style}></div>
}

export default Enemy;