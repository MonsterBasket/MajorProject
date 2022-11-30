import "./characterSelector.css"

function CharacterSelector({buttons, children=["Wizard", "Fighter", "Warrior"]}){

  function showCharacter(e){

  }

  return <div id="characterSelector">
      <div id="characterListLeft">
        <div id="characterList">
          {children.map(item => <div key={item} onClick={(e) => showCharacter(e)}>{item}</div>)}
        </div>
        <div id="characterListButtons">{buttons.map(item => item)}</div>
      </div>
      <div id="characterListRight">
        <div id="characterStats"></div>
        <div id="characterListImage"></div>
      </div>
    </div>
}

export default CharacterSelector;