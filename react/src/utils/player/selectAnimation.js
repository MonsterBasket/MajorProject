function selectAnimation(pos, velocity, lastDirection){
  const obj = {
    transform: `translate(${pos[0]}px, ${pos[1]}px) scale(3)`,
    animationDuration: "0.7s",
    animationTimingFunction: "steps(5, end)"

  }
  if(lastDirection.substring(0, 5) === "Space"){
    obj.animationTimingFunction = "steps(3, end)"
    obj.animationDuration = "0.3s"
    if(lastDirection.substring(6) === "KeyW") obj.animationName = "attackUp";
    else if(lastDirection.substring(6) === "KeyS") obj.animationName = "attackDown";
    else if(lastDirection.substring(6) === "KeyA") obj.animationName = "attackLeft";
    else if(lastDirection.substring(6) === "KeyD") obj.animationName = "attackRight";
    return obj
  }
  if(Math.abs(velocity[0]) > Math.abs(velocity[1]) || 
    (Math.abs(velocity[0]) > Math.abs(velocity[1] * 0.5) && (lastDirection == "KeyA" || lastDirection == "KeyD"))){
   obj.animationName = velocity[0] > 0 ? "walkRight" : "walkLeft";
  }
  else if(Math.abs(velocity[0]) < Math.abs(velocity[1]) || 
         (Math.abs(velocity[0] * 0.5)< Math.abs(velocity[1]) && (lastDirection == "KeyW" || lastDirection == "KeyS"))){
    obj.animationName = velocity[1] > 0 ? "walkDown" : "walkUp";
  }
  else if(Math.abs(velocity[0]) == Math.abs(velocity[1])){
    obj.animationName = velocity[0] > 0 ? "walkRight" : "walkLeft";
  }
  if(velocity[0] == 0 && velocity[1] == 0){
    if(lastDirection == "KeyW") obj.animationName = "idleUp";
    else if(lastDirection == "KeyS") obj.animationName = "idleDown";
    else if(lastDirection == "KeyA") obj.animationName = "idleLeft";
    else if(lastDirection == "KeyD") obj.animationName = "idleRight";
  }
  return obj
}

export default selectAnimation;