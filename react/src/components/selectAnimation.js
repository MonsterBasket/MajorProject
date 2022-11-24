function selectAnimation(pos, velocity, lastDirection){
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
  // console.log(velocity[0], velocity[1])
if(velocity[0] == 0 && velocity[1] == 0){
  // if(Math.abs(velocity[0]) < 0.15 && Math.abs(velocity[1]) < 0.15) {
    if(lastDirection == "KeyW") obj.animationName = "idleUp";
    if(lastDirection == "KeyS") obj.animationName = "idleDown";
    if(lastDirection == "KeyA") obj.animationName = "idleLeft";
    if(lastDirection == "KeyD") obj.animationName = "idleRight";
  }
  return obj
}

export default selectAnimation;