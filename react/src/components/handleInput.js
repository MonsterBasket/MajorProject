function handleInput(myKeys, velocity, maxSpeed){
  if(myKeys["KeyA"] || myKeys["KeyD"] || myKeys["KeyS"] || myKeys["KeyW"]){
    if(myKeys["KeyA"] && velocity[0] > -maxSpeed) velocity[0] -= 0.15;
    if(myKeys["KeyD"] && velocity[0] <  maxSpeed) velocity[0] += 0.15;
    if(myKeys["KeyS"] && velocity[1] <  maxSpeed) velocity[1] += 0.15;
    if(myKeys["KeyW"] && velocity[1] > -maxSpeed) velocity[1] -= 0.15;
  }
  if(Math.abs(velocity[0]) > 0 && !myKeys["KeyA"] && !myKeys["KeyD"]){
    if(Math.abs(velocity[0]) < 0.1) velocity[0] -= velocity[0];
    else {
      if(velocity[0] < 0) velocity[0] += 0.1;
      if(velocity[0] > 0) velocity[0] -= 0.1;
    }
  } 
  if(Math.abs(velocity[1]) > 0 && !myKeys["KeyW"] && !myKeys["KeyS"]){
    if(Math.abs(velocity[1]) < 0.1) velocity[1] -= velocity[1];
    else{
      if(velocity[1] < 0) velocity[1] += 0.1;
      if(velocity[1] > 0) velocity[1] -= 0.1;
    }
  }
}

export default handleInput;