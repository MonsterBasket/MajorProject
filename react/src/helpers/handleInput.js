import detectColliders from "../helpers/detectColliders";

function handleInput(currentMap, myKeys, velocity, x, y, maxSpeed){
  // console.log(x, y)
  let tempVelocity = velocity;
  // acceleration - had to merge some of the diagonal collider logic in here too
  const access = detectColliders(currentMap, x, y);
  if(myKeys["KeyA"] || myKeys["KeyD"] || myKeys["KeyS"] || myKeys["KeyW"]){
    if(myKeys["KeyA"] && tempVelocity[0] > -maxSpeed && access.left)  tempVelocity[0] -= 3;
    if(myKeys["KeyD"] && tempVelocity[0] <  maxSpeed && access.right) tempVelocity[0] += 3;
    if(myKeys["KeyS"] && tempVelocity[1] <  maxSpeed && access.down)  tempVelocity[1] += 3;
    if(myKeys["KeyW"] && tempVelocity[1] > -maxSpeed && access.up)    tempVelocity[1] -= 3;
  }

  // colliders
  // diagonal stops
  if(Math.abs(Math.abs(tempVelocity[0]) - Math.abs(tempVelocity[1])) < 5){ // check if x and y are roughly equivalent = going diagonal
  // if(Math.abs(velocity[0]) > 5 && Math.abs(velocity[1]) > 5){ // check if x and y are both active = going diagonal
    if(tempVelocity[0] > 0){ // going right
      if(tempVelocity[1] > 0 && !access.ddr){ //going down
        tempVelocity[0] = 0;
        tempVelocity[1] = 0;
      }
      if(tempVelocity[1] < 0 && !access.dur){ //going up
        tempVelocity[0] = 0;
        tempVelocity[1] = 0;
      }
    }
    if(tempVelocity[0] < 0){ //going left
      if(tempVelocity[1] > 0 && !access.ddl){ //going down
        tempVelocity[0] = 0;
        tempVelocity[1] = 0;
      }
      if(tempVelocity[1] < 0 && !access.dul){ //going up
        tempVelocity[0] = 0;
        tempVelocity[1] = 0;
      }  
    }
  }

  if(tempVelocity[0] > 0){ //going right
    if(!access.right) tempVelocity[0] = 0; //stop if hit collider directly
    else if(myKeys["KeyD"]){
      if(!access.dr && access.ur && Math.abs(tempVelocity[0]) > Math.abs(tempVelocity[1])) tempVelocity[1] = -tempVelocity[0]; // push up if collider is diagonal
      else if(!access.ur && access.dr && Math.abs(tempVelocity[0]) > Math.abs(tempVelocity[1])) tempVelocity[1] = tempVelocity[0];
    }
  }
  if(tempVelocity[0] < 0){ //going left
    if(!access.left) tempVelocity[0] = 0;
    else if(myKeys["KeyA"]){
      if(!access.dl && access.ul && Math.abs(tempVelocity[0]) > Math.abs(tempVelocity[1])) tempVelocity[1] = tempVelocity[0];
      else if(!access.ul && access.dl && Math.abs(tempVelocity[0]) > Math.abs(tempVelocity[1])) tempVelocity[1] = -tempVelocity[0];
    }
  }
  if(tempVelocity[1] > 0){ //going down
    if(!access.down) tempVelocity[1] = 0;
    else if(myKeys["KeyS"]){
      if(!access.dr && access.dl && Math.abs(tempVelocity[1]) > Math.abs(tempVelocity[0])) tempVelocity[0] = -tempVelocity[1];
      else if(!access.dl && access.dr && Math.abs(tempVelocity[1]) > Math.abs(tempVelocity[0])) tempVelocity[0] = tempVelocity[1];
    }
  }
  if(tempVelocity[1] < 0){ //going up
    if(!access.up) tempVelocity[1] = 0;
    else if(myKeys["KeyW"]){
      if(!access.ul && access.ur && Math.abs(tempVelocity[1]) > Math.abs(tempVelocity[0])) tempVelocity[0] = -tempVelocity[1];
      else if(!access.ur && access.ul && Math.abs(tempVelocity[1]) > Math.abs(tempVelocity[0])) tempVelocity[0] = tempVelocity[1];
    }
  }

  // slowing and stopping
  if(Math.abs(tempVelocity[0]) > 0 && !myKeys["KeyA"] && !myKeys["KeyD"]){
    if(Math.abs(tempVelocity[0]) < 2.1) tempVelocity[0] = 0; // stopping - note that 2.1 has to be higher than the 2 in slowing below
    else if(myKeys["KeyW"] || myKeys["KeyS"]){ // slow faster if changing direction
      if(tempVelocity[0] < 0) tempVelocity[0] += 3; // slowing
      if(tempVelocity[0] > 0) tempVelocity[0] -= 3;
    }
    else {
      if(tempVelocity[0] < 0) tempVelocity[0] += 2; // slowing
      if(tempVelocity[0] > 0) tempVelocity[0] -= 2;
    }
  } 
  if(Math.abs(tempVelocity[1]) > 0 && !myKeys["KeyW"] && !myKeys["KeyS"]){
    if(Math.abs(tempVelocity[1]) < 2.1) tempVelocity[1] = 0;
    else if(myKeys["KeyA"] || myKeys["KeyD"]){
      if(tempVelocity[1] < 0) tempVelocity[1] += 3;
      if(tempVelocity[1] > 0) tempVelocity[1] -= 3;
    }
    else{
      if(tempVelocity[1] < 0) tempVelocity[1] += 2;
      if(tempVelocity[1] > 0) tempVelocity[1] -= 2;
    }
  }
  return velocity;
}

export default handleInput;