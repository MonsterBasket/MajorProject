import { useEffect, useRef, useState } from "react";
import '../css/map.css';
import '../css/player.css';
import WorldTiler from "./WorldTiler";
import SkyTiler from "./SkyTiler";
import Player from "../characters/Player";
import mobs from "./mobs";
import maps from "./maps";
import handleInput from "../helpers/handleInput";


function World(){
  const [x, setX] = useState(400);
  const [y, setY] = useState(400);
  const velocity = useRef([0,0]);
  const [newPageX, setNewPageX] = useState(0);
  const [newPageY, setNewPageY] = useState(0);
  const lastDirection = useRef("KeyS"); //sets initial animation to "idleDown"
  const myKeys = useRef({});
  const maxSpeed = 30;
  const mapSize = [40 * 48, 23 * 48]; //I'll extract this from individual map details later
  const [re, refresh] = useState([]);
  const lastRender = useRef(0);
  const thisPage = useRef(10101);
  const nextPage = useRef();
  const pageDirection = useRef("");
  const pageReady = useRef(false);
  const shift = useRef([0,0]);
  const turning = useRef(false);
  const attacking = useRef(false);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp );
      return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [])

  useEffect(() => {
    requestAnimationFrame((now) => gameLoop(now, x, y, velocity.current, maxSpeed, attacking))
  })

  useEffect(() => {if(!turning.current) pageLoader()}, [x, y])

  function keyDown(e){
    if (!attacking.current) myKeys.current[e.code] = true;
    if (!attacking.current && ["KeyA", "KeyD", "KeyS", "KeyW"].includes(e.code)) lastDirection.current = e.code;
    if (!attacking && e.code === "Space"){
      attacking.current = true
      myKeys.current = {}
      myKeys.current["Space"] = true;
      console.log(myKeys)
      const keyHolder = lastDirection.current;
      lastDirection.current = `Space ${lastDirection.current}`
      setInterval(() => attacking.current = false, 500) // prevent input for 0.5 seconds
      setInterval(() => lastDirection.current = keyHolder, 700) // allow animation to play for full 0.7 seconds if no input
    }
  }
  function keyUp(e){
    myKeys.current[e.code] = false;
  }

  function gameLoop(now, x, y, velocity, maxSpeed) { //runs every frame before render
    now *= 0.01;
    const deltaTime = now - lastRender.current;
    lastRender.current = now;
    if (deltaTime) {
      velocity = handleInput(thisPage.current, myKeys.current, velocity, x, y, maxSpeed);
      if(velocity[0]) setX(prev => prev + velocity[0] * deltaTime);
      if(velocity[1]) setY(prev => prev + velocity[1] * deltaTime);
      if(Math.abs(velocity[0]) < 0.1 && Math.abs(velocity[1]) < 0.1) refresh([]);
    }
  }

  const worldMover = { //clamps map position
    left: `clamp(${window.innerWidth - (mapSize[0])}px, ${-x + window.innerWidth / 2}px, 0px)`,
    top: `clamp(${window.innerHeight - (mapSize[1])}px, ${-y + window.innerHeight / 2}px, 0px)`
  }
  const pageTurner = {
    left: newPageX,
    top: newPageY
  }

  function pageLoader(){
    if(!nextPage.current){
      if(x > mapSize[0] - 100) pageDirection.current = "right";
      else if(x < 100) pageDirection.current = "left";
      else if(y < 100) pageDirection.current = "up";
      else if(y > mapSize[1] - 100) pageDirection.current = "down";
      if(pageDirection.current) newPage(pageDirection.current)
    }
    else {
      if(pageDirection.current === "right"){
        if(x < mapSize[0] - 100) {
          pageDirection.current = "";
          nextPage.current = "";
          pageReady.current = false;
          return
        }
        else if(pageReady.current && x >= mapSize[0]) turnPage()
      }
      if(pageDirection.current === "left"){
        if(x > 100) {
          pageDirection.current = "";
          nextPage.current = "";
          pageReady.current = false;
          return
        }
        else if(pageReady.current && x <= 0) return turnPage()
      }
      if(pageDirection.current === "up"){
        if(y > 100) {
          pageDirection.current = "";
          nextPage.current = "";
          pageReady.current = false;
          return
        }
        else if(pageReady.current && y <= 0) return turnPage()
      }
      if(pageDirection.current === "down"){
        if(y < mapSize[1] - 100) {
          pageDirection.current = "";
          nextPage.current = "";
          pageReady.current = false;
          return
        }
        else if(pageReady.current && y >= mapSize[1]) return turnPage()
      }
    }
  }

  function newPage(direction = "up", page = ""){

    if(direction === "left"){
      nextPage.current = page || parseInt(thisPage.current) - 100;
      shift.current = [-mapSize[0], 0]
    }
    else if(direction === "right"){
      nextPage.current = page || parseInt(thisPage.current) + 100;
      shift.current = [mapSize[0], 0]
    }
    else if(direction === "up"){
      nextPage.current = page || parseInt(thisPage.current) - 1;
      shift.current = [0, -mapSize[1]]
    }
    else if(direction === "down"){
      nextPage.current = page || parseInt(thisPage.current) + 1;
      shift.current = [0, mapSize[1]]
    }
    if(maps(nextPage.current)) pageReady.current = true;
  }

  function turnPage(){
    let horizontal = true;
    let multiplier = 1;
    turning.current = true;
    if(pageDirection.current === "right") multiplier = -1;
    else if(pageDirection.current === "up") horizontal = false;
    else if(pageDirection.current === "down"){
      multiplier = -1;
      horizontal = false;
    }

    for (let i = 0; i < 30; i++) {
      setTimeout(_ => {
        if(horizontal) setNewPageX(prev => prev + (window.innerWidth / 30) * multiplier)
        else setNewPageY(prev => prev + (window.innerHeight / 30) * multiplier)
        if(i >= 29) return recenterPage()
      }, i*17)
    }
  }

  function recenterPage(){
    if(pageDirection.current === "left"){
      pageDirection.current = "right";
      setX(prev => prev + mapSize[0]);
      setNewPageX(0);
      }
    else if(pageDirection.current === "right"){
      pageDirection.current = "left";
      setX(prev => prev - mapSize[0]);
      setNewPageX(0);
      }
    else if(pageDirection.current === "up"){
      pageDirection.current = "down";
      setY(prev => prev + mapSize[1]);
      setNewPageY(0);
      }
    else if(pageDirection.current === "down"){
      pageDirection.current = "right";
      setY(prev => prev - mapSize[1]);
      setNewPageY(0);
    }
    turning.current = false
    let tempPage = thisPage.current
    thisPage.current = nextPage.current;
    nextPage.current = tempPage;
  }

  return <div className="world" style={worldMover}>
    <div className="world" style={pageTurner}>
      <WorldTiler coords={maps(thisPage.current)} />
      {pageReady.current ? <WorldTiler coords={maps(nextPage.current)} shift={shift.current} /> : ""}
        {/* {pageReady.current ? mobs(nextPage.current, shift.current) : ""}
        {mobs(thisPage.current)} */}
        <Player pos={[x, y]} velocity={velocity.current} lastDirection={lastDirection.current}/>
      <SkyTiler coords={maps(thisPage.current)} />
      {pageReady.current ? <SkyTiler coords={maps(nextPage.current)} shift={shift.current} /> : ""}
    </div>
    <div style={{position: "fixed", left:"0px", top:"0px", zIndex:"3", color: "white"}}>velocity: {Math.floor(velocity.current[0])} - {Math.floor(velocity.current[1])}<br/>lastDirection: {lastDirection.current}<br/>Attacking: {`${attacking.current}`}</div>
  </div>
}

export default World;