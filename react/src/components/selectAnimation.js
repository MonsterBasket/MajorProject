function selectAnimation(pos, velocity, lastDirection = "KeyS"){
  // console.log(velocity)
  const obj = {
    transform: `translate(${pos[0]}px, ${pos[1]}px) scale(3)`,
  }
  if(Math.abs(velocity[0]) > Math.abs(velocity[1])){
   obj.animationName = velocity[0] > 0 ? "walkRight" : "walkLeft";
  }
  else if(Math.abs(velocity[0]) < Math.abs(velocity[1])){
    obj.animationName = velocity[1] > 0 ? "walkDown" : "walkUp";
  }
  else if(Math.abs(velocity[0]) == Math.abs(velocity[1])){
    obj.animationName = velocity[0] > 0 ? "walkRight" : "walkLeft";
  }
  if(velocity[0] == 0 && velocity[1] == 0){
    if(lastDirection == "KeyW") obj.animationName = "idleUp";
    if(lastDirection == "KeyS") obj.animationName = "idleDown";
    if(lastDirection == "KeyA") obj.animationName = "idleLeft";
    if(lastDirection == "KeyD") obj.animationName = "idleRight";
  }
  return obj
}

export default selectAnimation;