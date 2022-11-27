import { useState } from "react";
import detectColliders from "../helpers/detectColliders";

function handleInput(currentMap, myKeys, velocity, x, y, maxSpeed, lastRender){
  // console.log(x, y)

  if(lastRender == 0 || x == undefined) return

  const access = detectColliders(currentMap, x, y);
  if(myKeys["KeyA"] || myKeys["KeyD"] || myKeys["KeyS"] || myKeys["KeyW"]){
    if(myKeys["KeyA"] && velocity[0] > -maxSpeed && access.right) velocity[0] -= (1 * lastRender);
    if(myKeys["KeyD"] && velocity[0] <  maxSpeed && access.left)  velocity[0] += (1 * lastRender);
    if(myKeys["KeyS"] && velocity[1] <  maxSpeed && access.down)  velocity[1] += (1 * lastRender);
    if(myKeys["KeyW"] && velocity[1] > -maxSpeed && access.up)    velocity[1] -= (1 * lastRender);
  }
  if(velocity[0] > 0){ //going right
    if(!access.right) velocity[0] = 0;
    else if (!access.dr && access.ur) velocity[1] = -velocity[0];
    else if (!access.ur && access.dr) velocity[1] = velocity[0];
  }
  if(velocity[0] < 0){ //going left
    if(!access.left) velocity[0] = 0;
    else if (!access.dl && access.ul) velocity[1] = velocity[0];
    else if (!access.ul && access.dl) velocity[1] = -velocity[0];
  }
  if(velocity[1] > 0){ //going down
    if(!access.down) velocity[0] = 0;
    else if (!access.dr && access.dl) velocity[0] = -velocity[1];
    else if (!access.dl && access.dr) velocity[0] = velocity[1];
  }
  if(velocity[1] < 0){ //going up
    if(!access.right) velocity[0] = 0;
    else if (!access.ul && access.ur) velocity[0] = -velocity[1];
    else if (!access.ur && access.ul) velocity[0] = velocity[1];
  }


  if(Math.abs(velocity[0]) > 0 && !myKeys["KeyA"] && !myKeys["KeyD"]){
    if(Math.abs(velocity[0]) < 0.2) velocity[0] -= velocity[0];
    else {
      if(velocity[0] < 0) velocity[0] += (0.8 * lastRender);
      if(velocity[0] > 0) velocity[0] -= (0.8 * lastRender);
    }
  } 
  if(Math.abs(velocity[1]) > 0 && !myKeys["KeyW"] && !myKeys["KeyS"]){
    if(Math.abs(velocity[1]) < 0.2) velocity[1] -= velocity[1];
    else{
      if(velocity[1] < 0) velocity[1] += (0.8 * lastRender);
      if(velocity[1] > 0) velocity[1] -= (0.8 * lastRender);
    }
  }
}

export default handleInput;