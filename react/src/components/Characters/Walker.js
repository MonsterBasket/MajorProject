import { useEffect, useRef, useState } from "react";
import handleInput from "../../utils/player/handleInput";
import selectAnimation from "../../utils/player/selectAnimation"

function Walker({id, attack, health, attackPos, type, currentMap, posInit, retEnemyPos, patrol, randomPath=false}){
  const target = useRef(posInit);
  const currentHealth = useRef(health)
  const [x, setX] = useState(posInit[0]);
  const [y, setY] = useState(posInit[1]);
  const lastDirection = useRef("KeyS")
  const pathCounter = useRef(0);
  const myKeys = useRef([]);
  const lastRender = useRef(0);
  let maxSpeed = 8;
  const velocity = useRef([0,0]);
  const stagger = useRef(false)
  const cancelTimer = useRef("");

  useEffect(() => {
    requestAnimationFrame((now) => gameLoop(now));
  })
  useEffect(() => makePath(), [])

  function gameLoop(now){
    now *= 0.01;
    const deltaTime = now - lastRender.current;
    lastRender.current = now;
    if (deltaTime){
      let healthObj = {current_health: currentHealth.current} // this is to expose health in handleInput in the same format as character.health
      let tempHealth = currentHealth.current
      velocity.current = handleInput(currentMap, myKeys.current, velocity.current, x, y, maxSpeed, null, {a:attackPos}, healthObj);
      if(x != target.current[0] && y != target.current[1] && !stagger.current) walk()
      if(velocity.current[0] || velocity.current[1]){
        if(velocity.current[0]) setX(prev => prev + velocity.current[0] * deltaTime);
        if(velocity.current[1]) setY(prev => prev + velocity.current[1] * deltaTime);
        retEnemyPos(id, [x, y, attack])
      }
      if(healthObj.current_health != tempHealth) manageHealth(healthObj.current_health)

    }
  }

  function manageHealth(damage){
    if(!stagger.current){
      currentHealth.current = damage;
      stagger.current = true
      setTimeout(() => stagger.current = false, 1500)
    }
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
      clearTimeout(cancelTimer.current)
      cancelTimer.current = setTimeout(makePath, nextPathTime)
    }
    else{
      target.current = patrol[pathCounter.current]
      pathCounter.current++;
      if(pathCounter.current >= patrol.length) pathCounter.current = 0;
      if(target.current[2]) nextPathTime = target.current[2] * 1000
      clearTimeout(cancelTimer.current)
      cancelTimer.current = setTimeout(makePath, nextPathTime)
    }
  }
  
  function walk(){ //simulates keyboard input to walk to targets
    let horizontal = target.current[0] - x
    let vertical = target.current[1] - y
    if(horizontal < -maxSpeed){ //using maxSpeed so that they don't overshoot the mark when they're running.
      myKeys.current["KeyA"] = true;
    }
    else if(myKeys.current["KeyA"] == true) {
      myKeys.current["KeyA"] = false;
      lastDirection.current = "KeyA"
    }
    if(horizontal > maxSpeed){
      myKeys.current["KeyD"] = true;
    }
    else if(myKeys.current["KeyD"] == true) {
      myKeys.current["KeyD"] = false;
      lastDirection.current = "KeyD"
    }
    if(vertical < -maxSpeed){
      myKeys.current["KeyW"] = true;
    }
    else if(myKeys.current["KeyW"] == true) {
      myKeys.current["KeyW"] = false;
      lastDirection.current = "KeyW"
    }
    if(vertical > maxSpeed){
      myKeys.current["KeyS"] = true;
    }
    else if(myKeys.current["KeyS"] == true) {
      myKeys.current["KeyS"] = false;
      lastDirection.current = "KeyS"
    }
  }

  const [style, attackDirection] = selectAnimation([x,y], velocity.current, lastDirection.current);
  const mobHealth = currentHealth.current <= 0 ? 0 : currentHealth.current === health ? 0 : (currentHealth.current / health) * 100

  return <div className={`${type} character`} style={style}><div className="mobHealth" style={{width: `${mobHealth}%`}}></div></div>
}

export default Walker;