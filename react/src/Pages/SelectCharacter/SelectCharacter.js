import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CharacterSelector from '../../components/Pages/CharacterSelector';
import Title from '../../components/Pages/Title';
import '../Login/home.css';

function SelectCharacter({handleLogout}){
  const navigate = useNavigate();
  const [character, setCharacter] = useState({})


  function handleClick(action){
    if(action == "play"){
      //set selected character
      navigate('/')
    }
    else{
      if (window.confirm(`Are you sure you want to delete ${character.name}`)){
        //delete selected character
      }
    }
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
        <button onClick={handleLogout}>Logout</button>
        <Title />
  <h2>Select Character</h2>
      {/* select from created characters, buttons to create new, delete selected (with confirm) or play. Image and stats of selected character. */}
      <CharacterSelector buttons={buttons()}>
        {myCharacters()}
      </CharacterSelector>
    </div>
}

export default SelectCharacter;