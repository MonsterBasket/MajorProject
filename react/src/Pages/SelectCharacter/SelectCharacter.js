import { Link } from 'react-router-dom';
import CharacterSelector from '../../components/Pages/CharacterSelector';
import Title from '../../components/Pages/Title';
import '../Login/home.css';

function SelectCharacter(){

  function handleClick(action){
    console.log(action)
  }

  function buttons(){
    return [<Link to="/new-character"><button key="newButton">New</button></Link>,
    <button key="playButton" onClick={() => handleClick("play")}>Play</button>,
    <button key="deleteButton" onClick={() => handleClick("delete")}>Delete</button>]
  }

  function myCharacters(){
    // fetch characters, return in array
    return ["character 1", "character 2", "Fred", "George", "Harry", "Dragon", "Hagrid", "Hermione", "Ron", "Ginny" ]
  }

  return <div id="selectCharacter">
        <Title />
  <h2>Select Character</h2>
      {/* select from created characters, buttons to create new, delete selected (with confirm) or play. Image and stats of selected character. */}
      <CharacterSelector buttons={buttons()}>
        {myCharacters()}
      </CharacterSelector>
    </div>
}

export default SelectCharacter;