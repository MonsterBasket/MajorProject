import { useState } from "react";
import detectColliders from "../helpers/detectColliders";

function handleInput(currentMap, myKeys, velocity, x, y, maxSpeed){
  // console.log(x, y)

  const access = detectColliders(currentMap, x, y);
  if(myKeys["KeyA"] || myKeys["KeyD"] || myKeys["KeyS"] || myKeys["KeyW"]){
    if(myKeys["KeyA"] && velocity[0] > -maxSpeed && access.left)  velocity[0] -= 3;
    if(myKeys["KeyD"] && velocity[0] <  maxSpeed && access.right) velocity[0] += 3;
    if(myKeys["KeyS"] && velocity[1] <  maxSpeed && access.down)  velocity[1] += 3;
    if(myKeys["KeyW"] && velocity[1] > -maxSpeed && access.up)    velocity[1] -= 3;
  }
  // colliders
  if(velocity[0] > 0){ //going right
    if(!access.right) velocity[0] = 0; //stop if hit collider directly
    else if (!access.dr && access.ur && Math.abs(velocity[0]) > Math.abs(velocity[1])) velocity[1] = -velocity[0]; // push up if collider is diagonal
    else if (!access.ur && access.dr && Math.abs(velocity[0]) > Math.abs(velocity[1])) velocity[1] = velocity[0];
    //possibly need to check if hitting a diagonal collider head on (velocity x and y are more or less the same)
  }
  if(velocity[0] < 0){ //going left
    if(!access.left) velocity[0] = 0;
    else if (!access.dl && access.ul && Math.abs(velocity[0]) > Math.abs(velocity[1])) velocity[1] = velocity[0];
    else if (!access.ul && access.dl && Math.abs(velocity[0]) > Math.abs(velocity[1])) velocity[1] = -velocity[0];
  }
  if(velocity[1] > 0){ //going down
    if(!access.down) velocity[1] = 0;
    else if (!access.dr && access.dl && Math.abs(velocity[1]) > Math.abs(velocity[0])) velocity[0] = -velocity[1];
    else if (!access.dl && access.dr && Math.abs(velocity[1]) > Math.abs(velocity[0])) velocity[0] = velocity[1];
  }
  if(velocity[1] < 0){ //going up
    if(!access.up) velocity[1] = 0;
    else if (!access.ul && access.ur && Math.abs(velocity[1]) > Math.abs(velocity[0])) velocity[0] = -velocity[1];
    else if (!access.ur && access.ul && Math.abs(velocity[1]) > Math.abs(velocity[0])) velocity[0] = velocity[1];
  }


  if(Math.abs(velocity[0]) > 0 && !myKeys["KeyA"] && !myKeys["KeyD"]){
    if(Math.abs(velocity[0]) < 1.5) velocity[0] -= velocity[0];
    else {
      if(velocity[0] < 0) velocity[0] += 2;
      if(velocity[0] > 0) velocity[0] -= 2;
    }
  } 
  if(Math.abs(velocity[1]) > 0 && !myKeys["KeyW"] && !myKeys["KeyS"]){
    if(Math.abs(velocity[1]) < 1.5) velocity[1] -= velocity[1];
    else{
      if(velocity[1] < 0) velocity[1] += 2;
      if(velocity[1] > 0) velocity[1] -= 2;
    }
  }
}

export default handleInput;