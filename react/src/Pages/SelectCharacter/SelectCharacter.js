import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Pages/Title';
import '../Login/home.css';
import knight from "../../images/knight.png"
import rogue from "../../images/rogue.png"
import mage from "../../images/mage.png"
import axios from 'axios';
const url = "http://localhost:3001/"

function SelectCharacter({user, setPlayCharacter, handleLogout}){
  const navigate = useNavigate();
  const [character, setCharacter] = useState({})
  const [newCharacter, setNewCharacter] = useState({name: "", role: "Knight"})
  const [characterCreator, setCreator] = useState(false)
  const [imgUrl, setImg] = useState(knight)
  const [errorDisplay, setError] = useState([])
  const [savedCharacters, setSavedCharacters] = useState([])

  useEffect(() => {getCharacters()}, [])

  function getCharacters(){
    axios.get(`${url}characters`, {params: {user_id: user.id}}, {withCredentials: true})
    .then(res => {
      if(res.data.characters.length > 0) {
        setSavedCharacters(res.data.characters)
        setCharacter(res.data.characters[0])
        showCharacter(res.data.characters[0])
      }
      else setError(res.data.errors)
    })
    .catch(err => console.log("Error retrieving characters:", err))
  }

  function createCharacter(){
    const sendCharacter = {...newCharacter, user_id:user.id}
    if(character != {}){
    axios.post(`${url}characters`, sendCharacter, {withCredentials: true})
      .then(res => {
        if(res.data.status=="created") play(newCharacter)
        else setError(res.data.errors)
      })
      .catch(err => console.log("create character error:", err))
    }
    else setError(["Please enter a name"])
  }

  function deleteCharacter(){
    if (window.confirm(`Are you sure you want to delete ${character.name}`)){
      axios.delete(`${url}characters/${character.id}`)
      .then(res => {
        setSavedCharacters(res.data.characters)
        setCharacter(res.data.characters[0])
        showCharacter(res.data.characters[0])
      })
    }
  }

  function play(character){
    setPlayCharacter(character)
    navigate("/")
  }

  function showCharacter(character){
    if(!characterCreator) setCharacter(character)
    else {
      setNewCharacter({name: newCharacter.name, role: character.role})
    }
      if(character.role == "Knight") setImg(knight)
      if(character.role == "Mage") setImg(mage)
      if(character.role == "Rogue") setImg(rogue)
  }

  function buttons(){
    if(characterCreator) return <button onClick={createCharacter}>Create Character</button>
    else
    return <><button key="newChar" onClick={() => setCreator(true)}>New</button>
            <button key="play" onClick={() => play(character)}>Play</button>
            <button key="del" onClick={deleteCharacter}>Delete</button></>
  }

  function characters(){
    // fetch characters, return in array
    if(characterCreator) return [
      {name:"", role:"Knight"},
      {name:"", role:"Rogue"},
      {name:"", role:"Mage"}]
    else if(savedCharacters) return(savedCharacters)
    else return []
  }

  function hideErrors(){
    if(errorDisplay.length == 0) return "hidden"
    else {
      setTimeout(() => setError([]), 2000)
      return "notHidden"
    }
  }

  return <div id="selectCharacter">
    <button onClick={handleLogout}>Logout</button>
    <Title />
    <h2>Select Character</h2>
    <div id="characterSelector">
      <div id="characterListLeft">
        <div id="characterList">
          {characterCreator ? <div id="createHeader">Create a Character</div> : ""}
          {characters().map((character, index) => <div key={index} onClick={() => showCharacter(character)}>{character.name || character.role}</div>)}
        </div>
        { characterCreator ? <input type="text" name="name" className="nameInput" placeholder="Character Name" onChange={(e) => setNewCharacter({...newCharacter, name:e.target.value})} value={newCharacter.name}/> : "" }
        <div id="characterListButtons">{buttons()}</div>
      </div>
      <div id="characterListRight">
        <div id="characterStats">
          {characterCreator ? `${newCharacter.name} - ${newCharacter.role} - Level 1`: `${character.name} - ${character.role} - Level ${character.level}`}
        </div>
        <div id="characterListImage" style={{backgroundImage: `url(${imgUrl})`}}></div>
      </div>
    {<div id="errorDisplay" className={hideErrors()}>{errorDisplay.map(item => <span key={item}>{item}<br/></span>)}</div>}
    </div>
    {characterCreator ? <button onClick={() => setCreator(false)}>Back</button> : ""}
  </div>
}

export default SelectCharacter;