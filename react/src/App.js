import { Route, Routes } from "react-router-dom";
import './App.css';
import Hud from "./components/UserInterface/Hud"
import MapMaker from "./Pages/DevTools/MapMaker"
import GameController from "./Pages/Game/GameController"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import SelectCharacter from "./Pages/SelectCharacter/SelectCharacter"
import CreateCharacter from "./Pages/CreateCharacter/CreateCharacter"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dev/mapmaker" element={<MapMaker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-character" element={<SelectCharacter />} />
        <Route path="/new-character" element={<CreateCharacter />} />
        <Route path="/" element={<>
          <GameController />
          <Hud />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
