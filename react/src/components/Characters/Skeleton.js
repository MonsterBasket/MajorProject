import { useEffect, useRef, useState } from "react";
import handleInput from "../../utils/player/handleInput";
import selectAnimation from "../../utils/player/selectAnimation"

function Skeleton({type, currentMap, posInit, patrol, randomPath=false}){
  const [velocityState, setVel] = useState([0,0])
  const target = useRef(posInit);
  const pos = useRef(posInit);
  let posX = pos[0];
  let posY = pos[1]
  const lastDirection = useRef("KeyS")
  let pathCounter = 0;
  let myKeys = [];
  let lastRender = 0;
  let maxSpeed = 8;
  let velocity = [0,0];
  let cancelTimer = "";

  useEffect(() => {
    requestAnimationFrame(gameLoop);
    makePath();
  }, [])

  function gameLoop(now){
    now *= 0.01;
    const deltaTime = now - lastRender;
    lastRender = now;
    if (deltaTime){
      handleInput(currentMap, myKeys, velocity, posX, posY, maxSpeed);
      if(pos[0] != target.current[0] && [pos][1] != target.current[1]) walk()
      if(velocity[0] || velocity[1]){
        posX = pos.current[0] + velocity[0] * deltaTime
        posY = pos.current[1] + velocity[1] * deltaTime
        pos.current = [posX, posY]
      }
      setVel(velocity)
    }
    requestAnimationFrame(gameLoop);
  }

  function randomTarget(){
    const targetX = Math.random() * (patrol[1][0] - patrol[0][0]) + patrol[0][0]
    const targetY = Math.random() * (patrol[1][1] - patrol[0][1]) + patrol[0][1]
    return [targetX, targetY]
  }

  function makePath(){
    let nextPathTime = Math.random() * (10000 - 5000) + 5000 //5-10 seconds
    if(randomPath){
      target.current = randomTarget()
      clearTimeout(cancelTimer)
      cancelTimer = setTimeout(makePath, nextPathTime)
    }
    else{
      target.current = patrol[pathCounter]
      pathCounter++;
      if(pathCounter >= patrol.length) pathCounter = 0;
      if(target.current[2]) nextPathTime = target.current[2] * 1000
      clearTimeout(cancelTimer)
      cancelTimer = setTimeout(makePath, nextPathTime)
    }
  }
  
  function walk(){ //simulates keyboard input to walk to targets
    let horizontal = target.current[0] - pos.current[0]
    let vertical = target.current[1] - pos.current[1]
    if(horizontal < -maxSpeed){ //using maxSpeed so that they don't overshoot the mark when they're running.
      myKeys["KeyA"] = true;
    }
    else if(myKeys["KeyA"] == true) {
      myKeys["KeyA"] = false;
      lastDirection.current = "KeyA"
    }
    if(horizontal > maxSpeed){
      myKeys["KeyD"] = true;
    }
    else if(myKeys["KeyD"] == true) {
      myKeys["KeyD"] = false;
      lastDirection.current = "KeyD"
    }
    if(vertical < -maxSpeed){
      myKeys["KeyW"] = true;
    }
    else if(myKeys["KeyW"] == true) {
      myKeys["KeyW"] = false;
      lastDirection.current = "KeyW"
    }
    if(vertical > maxSpeed){
      myKeys["KeyS"] = true;
    }
    else if(myKeys["KeyS"] == true) {
      myKeys["KeyS"] = false;
      lastDirection.current = "KeyS"
    }
  }

  const style = selectAnimation(pos.current, velocityState, lastDirection.current);

  return <div className={`${type} character`} style={style}></div>
}

export default Skeleton;