import '../Login/home.css';
import Title from '../../components/Pages/Title'
import CharacterSelector from '../../components/Pages/CharacterSelector';
import { Link } from 'react-router-dom';

function CreateCharacter(){

  return <div id="createCharacter">
    <Title />
    <h2>Create Character</h2>
      {/* select class, save or cancel. Image and stats of character being created. */}
      <CharacterSelector buttons={[<button>Create Character</button>]} />
      <Link to="/select-character"><button>Back</button></Link>
    </div>
}

export default CreateCharacter;