import '../Login/home.css';
import Title from '../../components/Pages/Title'
import CharacterSelector from '../../components/Pages/CharacterSelector';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateCharacter({handleLogout}){
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    role: ""
  })

  function saveCharacter(){
    //save character
    //set character
    navigate('/')
  }

  return <div id="createCharacter">
    <button onClick={handleLogout}>Logout</button>
    <Title />
    <h2>Create Character</h2>
      {/* select class, save or cancel. Image and stats of character being created. */}
      <CharacterSelector newCharacter={true} characters={["Knight", "Mage", "Rogue"]} buttons={[<button onClick={saveCharacter}>Create Character</button>]} setCharacter={setCharacter} />
      <Link to="/select-character"><button>Back</button></Link>
    </div>
}

export default CreateCharacter;