import { useEffect, useRef, useState } from "react";
import './map.css';
import '../../components/Characters/player.css';
import Hud from "../../components/UserInterface/Hud"
import WorldTiler from "../../components/Maps/WorldTiler";
import SkyTiler from "../../components/Maps/SkyTiler";
import Player from "../../components/Characters/Player";
import mobs from "../../utils/map/mobs";
import maps from "../../utils/map/maps";
import handleInput from "../../utils/player/handleInput";


function GameController({character}){
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
    requestAnimationFrame((now) => gameLoop(now, x, y, velocity.current, maxSpeed, attacking.current))
  })

  useEffect(() => {if(!turning.current) pageLoader()}, [x, y])

  function keyDown(e){
    myKeys.current[e.code] = true;
    if (!attacking.current && ["KeyA", "KeyD", "KeyS", "KeyW"].includes(e.code)) lastDirection.current = e.code;
    else if(lastDirection.current.substring(0, 5) != "Space"){
      let keyHolder = lastDirection.current
      lastDirection.current = `Space ${lastDirection.current}`
      setTimeout(() => lastDirection.current = keyHolder, 300)
    }
  }
  function keyUp(e){
    if(e.code != "Space") myKeys.current[e.code] = false;
  }

  function gameLoop(now, x, y, velocity, maxSpeed, attacking) { //runs every frame before render
    now *= 0.01;
    const deltaTime = now - lastRender.current;
    lastRender.current = now;
    if (deltaTime) { //skips evaluations if no time has passed since last call (which strangely does happen)
      if(myKeys.current["Space"] == true){
        attacking = true;
        setTimeout((attacking) => {
          attacking = false;
          myKeys.current["Space"] = false;
        }, 300);
      }
      velocity = handleInput(thisPage.current, myKeys.current, velocity, x, y, maxSpeed, attacking);
      if(velocity[0]) setX(prev => prev + velocity[0] * deltaTime);
      if(velocity[1]) setY(prev => prev + velocity[1] * deltaTime);
      if(Math.abs(velocity[0]) < 0.1 && Math.abs(velocity[1]) < 0.1) refresh([]);
    }
  }

  const worldMover = { //clamps map position
    left: `clamp(${Math.min(window.innerWidth, 1920) - (mapSize[0])}px, ${-x + Math.min(window.innerWidth, 1920) / 2}px, 0px)`,
    top: `clamp(${Math.min(window.innerHeight, 1080) - (mapSize[1])}px, ${-y + Math.min(window.innerHeight, 1080) / 2}px, 0px)`
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

  return <div className="gameContainer">
    <div className="world" style={worldMover}>
      <div className="world" style={pageTurner}>
        <WorldTiler coords={maps(thisPage.current)} />
        {pageReady.current ? <WorldTiler coords={maps(nextPage.current)} shift={shift.current} /> : ""}
          {pageReady.current ? mobs(nextPage.current, shift.current) : ""}
          {mobs(thisPage.current)}
          <Player pos={[x, y]} velocity={velocity.current} lastDirection={lastDirection.current} role={character.role}/>
        <SkyTiler coords={maps(thisPage.current)} />
        {pageReady.current ? <SkyTiler coords={maps(nextPage.current)} shift={shift.current} /> : ""}
      </div>
      {/* <div style={{position: "fixed", left:"0px", top:"0px", zIndex:"3", color: "white"}}>velocity: {Math.floor(velocity.current[0])} - {Math.floor(velocity.current[1])}<br/>lastDirection: {lastDirection.current}<br/>Attacking: {`${attacking.current}`}</div> */}
    </div>
    <Hud character={character} />
  </div>
}

export default GameController;