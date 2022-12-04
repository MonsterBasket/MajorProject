import { useState } from "react";
import "./characterSelector.css"
import image from "../../images/Knight.png"

function CharacterSelector({newCharacter=false, buttons, characters, setCharacter}){
  const [name, setName] = useState("")
  const [imgUrl, setUrl] = useState("")

  function showCharacter(character){
    if(!newCharacter) setCharacter(character)
    else setCharacter({name: name, role: character})
    setUrl(`./src/images/Knight.png`)
  }

  const myButtons = buttons;

  return <div id="characterSelector">
      <div id="characterListLeft">
        <div id="characterList">
          {newCharacter ? characters.map((item, index) => <div key={index} onClick={() => showCharacter(item)}>{item}</div>)
          : <></>}
        </div>
        <div id="characterListButtons">{myButtons.map((item, index) => <div key={index} >{item}</div>)}</div>
      </div>
      <div id="characterListRight">
        <div id="characterStats">
          { newCharacter ? <input type="text" name="name" className="nameInput" placeholder="Character Name" onChange={(e) => setName(e.target.value)} value={name}/> : "" }
        </div>
        <div id="characterListImage" style={{backgroundImage: `url(${image})`}}></div>
      </div>
    </div>
}


export default CharacterSelector;