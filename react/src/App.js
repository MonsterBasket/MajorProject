import { Route, Routes } from "react-router-dom";
import './App.css';
import Hud from "./components/UserInterface/Hud"
import MapMaker from "./Pages/DevTools/MapMaker"
import GameController from "./Pages/Game/GameController"
import Login from "./Pages/Login/Login.js"
import Signup from "./Pages/Signup/Signup"
import SelectCharacter from "./Pages/SelectCharacter/SelectCharacter"
import CreateCharacter from "./Pages/CreateCharacter/CreateCharacter"
import { useState } from "react";

function App(){
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  function handleLogin(data) {
    setLoggedIn(true)
    setUser(data.user)
  }
  function handleLogout(){
    setLoggedIn(false);
    setUser({});
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/dev/mapmaker" element={<MapMaker />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} handleLogout={handleLogout} />} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin} handleLogout={handleLogout} />} />
        <Route path="/select-character" element={<SelectCharacter />} />
        <Route path="/new-character" element={<CreateCharacter />} />
        <Route path="/" element={<>
          <GameController user={user} setUser={setUser} />
          <Hud user={user} setUser={setUser} />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
