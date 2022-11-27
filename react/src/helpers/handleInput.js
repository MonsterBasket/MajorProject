import { useState } from "react";

function handleInput(myKeys, velocity, maxSpeed, lastRender){
  if(lastRender == 0) return
  if(myKeys["KeyA"] || myKeys["KeyD"] || myKeys["KeyS"] || myKeys["KeyW"]){
    if(myKeys["KeyA"] && velocity[0] > -maxSpeed) velocity[0] -= (1 * lastRender);
    if(myKeys["KeyD"] && velocity[0] <  maxSpeed) velocity[0] += (1 * lastRender);
    if(myKeys["KeyS"] && velocity[1] <  maxSpeed) velocity[1] += (1 * lastRender);
    if(myKeys["KeyW"] && velocity[1] > -maxSpeed) velocity[1] -= (1 * lastRender);
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