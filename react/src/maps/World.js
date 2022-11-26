import { useEffect, useState } from "react";
import '../css/map.css';
import '../css/player.css';
import WorldTiler from "./WorldTiler";
import SkyTiler from "./SkyTiler";
import Player from "../characters/Player";
import mobs from "./mobs";
import maps from "./maps";
import handleInput from "../helpers/handleInput";

let velocity = [0,0];

function World(){
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);
  const [newPageX, setNewPageX] = useState(0);
  const [newPageY, setNewPageY] = useState(0);
  const [lastDirection, setDirection] = useState("KeyS"); //sets initial animation to "idleDown"
  let myKeys = [];
  const maxSpeed = 3;
  const mapSize = [40,23]; //I'll extract this from individual map details later
  const [re, refresh] = useState([]);
  let thisPage = "0101";
  let nextPage = "0201";
  let pageDirection = "";

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp );
    gameLoop();
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [])

  function keyDown(e){
    myKeys[e.code] = true;
  }
  function keyUp(e){
    myKeys[e.code] = false;
    setDirection(e.code);
  }

  function gameLoop() { //runs every frame before render
    handleInput(myKeys, velocity, maxSpeed);
    if(velocity[0]) setX(prev => prev + velocity[0]);
    if(velocity[1]) setY(prev => prev + velocity[1]);
    if(Math.abs(velocity[0]) < 0.1 && Math.abs(velocity[1]) < 0.1) refresh([]);
    pageLoader();
    requestAnimationFrame(gameLoop);
  }

  const worldMover = { //clamps map position
    left: `clamp(${window.innerWidth - (mapSize[0] * 48)}px, ${-x + window.innerWidth / 2}px, 0px)`,
    top: `clamp(${window.innerHeight - (mapSize[1] * 48)}px, ${-y + window.innerHeight / 2}px, 0px)`
  }
  const pageTurner = {
    left: newPageX,
    top: newPageY
  }

  function pageLoader(page=""){
    if(page) return nextPage = page;
    if(!nextPage){
      if(x > mapSize[0] * 48 - 100) pageDirection = "right";
      else if(x < 100) pageDirection = "left";
      else if(y < 100) pageDirection = "up";
      else if(y > mapSize[1] * 48 - 100) pageDirection = "down";
      return "" && newPage(pageDirection)
    }
    else
      if(pageDirection == "right"){
        if(x < mapSize[0] * 48 - 100) pageDirection = "";
        else if(x >= mapSize[0] * 48) return turnPage(pageDirection, nextPage)
      }
      if(pageDirection == "left"){
        if(x > 100) pageDirection = "";
        else if(x <= 0) return turnPage(pageDirection, nextPage)
      }
      if(pageDirection == "up"){
        if(y > 100) pageDirection = "";
        else if(y <= 0) return turnPage(pageDirection, nextPage)
      }
      if(pageDirection == "down"){
        if(y < mapSize[1] * 48 - 100) pageDirection = "";
        else if(y >= mapSize[1] * 48) return turnPage(pageDirection, nextPage)
      }
  }

  function newPage(direction){
    if(direction == "left") nextPage = (parseInt("1" + thisPage) - 1000 - 10000).toString;
    if(direction == "right") nextPage = (parseInt("1" + thisPage) + 1000 - 10000).toString;
    if(direction == "up") nextPage = (parseInt("1" + thisPage) - 100 - 10000).toString;
    if(direction == "down") nextPage = (parseInt("1" + thisPage) + 100 - 10000).toString;
  }

  function turnPage(direction, page){
    let horizontal = true;
    let multiplier = 1;
    window.removeEventListener("keydown", keyDown);
    if(direction == "left") multiplier = -1;
    else if(direction == "down") horizontal = false;
    else if(direction == "up"){
      multiplier = -1;
      horizontal = false;
    }

    for (let i = 0; i < 30; i++) {
      setTimeout(_ => {
        if(horizontal) setNewPageX(prev => prev + (mapSize[0] * 48 + 10) * multiplier)
        else           setNewPageY(prev => prev + (mapSize[1] * 48 + 10) * multiplier)
        if(i == 29) window.addEventListener("keydown", keyDown)
      }, i*17)
    }
    
    if(direction == "left"){
      direction = "right";
      nextPage = thisPage;
      thisPage = page;
      setX(10);
      setNewPageX(0);
      }
    else if(direction == "right"){
      direction = "left";
      nextPage = thisPage;
      thisPage = page;
      setX(mapSize[0] * 48 - 10);
      setNewPageX(0);
      }
    else if(direction == "up"){
      direction = "down";
      nextPage = thisPage;
      thisPage = page;
      setY(mapSize[1] * 48 - 10);
      setNewPageX(0);
      }
    else if(direction == "down"){
      direction = "right";
      nextPage = thisPage;
      thisPage = page;
      setY(10);
      setNewPageX(0);
      }
    }

  return <div className="world" style={worldMover}>
    <div className="world" style={pageTurner}>
      <WorldTiler coords={maps(thisPage)} />
      {nextPage ? <WorldTiler coords={maps(nextPage)} /> : ""}
        {mobs(thisPage)}
        {nextPage ? mobs(nextPage) : ""}
        <Player pos={[x, y]} velocity={velocity} lastDirection={lastDirection}/>
      <SkyTiler coords={maps(thisPage)} />
      {nextPage ? <SkyTiler coords={maps(nextPage)} /> : ""}
      <div style={{position: "fixed", zIndex:"3", color: "white"}}>X: {x} - mapSize[0]: {mapSize[0] * 48}</div>
    </div>
  </div>
}

export default World;