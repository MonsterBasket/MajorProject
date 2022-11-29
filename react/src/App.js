import { Route, Routes } from "react-router-dom";
import './App.css';
import Hud from "./ui/Hud"
import MapMaker from "./maps/MapMaker"
import World from "./maps/World"
import Home from "./ui/Home"
import Signup from "./ui/Signup"
import SelectCharacter from "./ui/SelectCharacter"
import CreateCharacter from "./ui/CreateCharacter"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dev/mapmaker" element={<MapMaker />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-character" element={<SelectCharacter />} />
        <Route path="/new-character" element={<CreateCharacter />} />
        <Route path="/hunt" element={<>
          <World />
          <Hud />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
