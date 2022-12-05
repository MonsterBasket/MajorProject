import "./hud.css"
import "./windows.css"
import HealthHud from "./HealthHud"
import MenusHud from "./MenusHud"
import SkillsHud from "./SkillsHud"
  import Items from "./gameMenu/Items"
  import Armour from "./gameMenu/Armour"
  import Skills from "./gameMenu/Skills"
  import Quests from "./gameMenu/Quests"
import { useRef, useState } from "react"

// master container for all the on screen buttons (HUD = Heads Up Display)
function Hud(){
  const [hideButtons, setHideButtons] = useState(false);
  const [show, setShow] = useState(["left", "center", "right", "hidden"])
  const [transition, setTransition] = useState("")
  // show = [0]Items, [1]Armour, [2]Skills, [3]Quests

function showItems(){
  setTransition("")
  setShow(["center", "right", "hidden", "left"])
  setHideButtons(true)
}
function showArmour(){
  setTransition("")
  setShow(["left", "center", "right", "hidden"])
  setHideButtons(true)
}
function showSkills(){
  setTransition("")
  setShow(["hidden", "left", "center", "right"])
  setHideButtons(true)
}
function showQuests(){
  setTransition("")
  setShow(["right", "hidden", "left", "center"])
  setHideButtons(true)
}
function useSkill(skill){
  console.log(skill.target.id)
}
function moveLeft(){
  setTransition("trans")
  setShow([show[1], show[2], show[3], show[0]])
}
function moveRight(){
  setTransition("trans")
  setShow([show[3], show[0], show[1], show[2]])
}
function close(){
  setHideButtons(false)
}

  return <div id="hudContainer">
    <HealthHud />
    {hideButtons ? <>
      <div className={`itemsWindow ${show[0]} ${transition}`}><Items /><div onClick={close}className="miniCloser" /></div>
      <div className={`armourWindow ${show[1]} ${transition}`}><Armour /><div onClick={close}className="miniCloser" /></div>
      <div className={`skillsWindow ${show[2]} ${transition}`}><Skills /><div onClick={close}className="miniCloser" /></div>
      <div className={`questsWindow ${show[3]} ${transition}`}><Quests /><div onClick={close}className="miniCloser" /></div>
      <div onClick={close} id="closer"></div>
      <div onClick={moveLeft} className="left ontop"></div>
      <div onClick={moveRight} className="right ontop"></div>
    </> : <MenusHud showItems={showItems} showArmour={showArmour} showSkills={showSkills} showQuests={showQuests} />}
    <SkillsHud useSkill={useSkill}/>
  </div>
}

export default Hud;