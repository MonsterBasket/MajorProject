import "./hud.css"
import "./windows.css"
import HealthHud from "./HealthHud"
import MenusHud from "./MenusHud"
import SkillsHud from "./SkillsHud"
import Items from "./gameMenu/Items"
import Armour from "./gameMenu/Armour"
import Skills from "./gameMenu/Skills"
import Quests from "./gameMenu/Quests"

function Hud(){
  let itemsWindow = "hide";
  let armourWindow = "hide";
  let skillsWindow = "hide";
  let questsWindow = "hide";
  let hideButtons = "";
  const windows = {
    items: <div className={`itemsWindow ${itemsWindow}`}><Items /></div>,
    armour: <div className={`armourWindow ${armourWindow}`}><Armour /></div>,
    skills: <div className={`skillsWindow ${skillsWindow}`}><Skills /></div>,
    quests: <div className={`questsWindow ${questsWindow}`}><Quests /></div>
  }
  const show = {
    center: null,
    left: null,
    right: null,
    hidden: null
  }

function showItems(){
    show.center = windows.items;
    show.left = windows.quests;
    show.right = windows.armour;
    show.hidden = windows.skills;
    hideButtons = "hide"
}
function showArmour(){
  show.center = windows.armour;
  show.left = windows.items;
  show.right = windows.skills;
  show.hidden = windows.quests;
  hideButtons = "hide"
}
function showSkills(){
  show.center = windows.skills;
  show.left = windows.armour;
  show.right = windows.quests;
  show.hidden = windows.items;
  hideButtons = "hide"
}
function showQuests(){
  show.center = windows.quests;
  show.left = windows.skills;
  show.right = windows.items;
  show.hidden = windows.armour;
  hideButtons = "hide"
}
function useSkill(skill){
  console.log(skill.target.id)
}
function moveLeft(){
  const showCopy = show;
  show.center = showCopy.left;
  show.left = showCopy.hidden;
  show.hidden = showCopy.right;
  show.right = showCopy.center;  
}
function moveRight(){
  const showCopy = show;
  show.center = showCopy.right;
  show.right = showCopy.hidden;
  show.hidden = showCopy.left;
  show.left = showCopy.center;  
}
function close(){
  hideButtons = "";
  show.center = null;
  show.left = null;
  show.right = null;
  show.hidden = null;
}

  return <div id="hudContainer">
    <HealthHud />
    <MenusHud showItems={showItems} showArmour={showArmour} showSkills={showSkills} showQuests={showQuests} hideButtons={hideButtons}/>
    <SkillsHud useSkill={useSkill}/>
  </div>
}

export default Hud;