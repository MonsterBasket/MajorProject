import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import Admin from "./Pages/Admin/Admin";
import MapMaker from "./Pages/DevTools/MapMaker"
import Login from "./Pages/Login/Login.js"
import Signup from "./Pages/Signup/Signup"
import SelectCharacter from "./Pages/SelectCharacter/SelectCharacter"
import CreateCharacter from "./Pages/CreateCharacter/CreateCharacter"
import GameController from "./Pages/Game/GameController"
import Hud from "./components/UserInterface/Hud"
const url = "http://localhost:3001/"

function App(){
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  useEffect(() => loginStatus(), [])

  function loginStatus(){
    axios.get(`${url}logged_in`, {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) handleLogin(response.data)
      else handleLogout()
    })
    .catch(error => console.log('api errors:', error))
  }

  function handleLogin(data) {
    console.log(data)
    setLoggedIn(true)
    setUser(data.user)
    navigate("/select-character")
  }
  function handleLogout(){
    setLoggedIn(false);
    setUser({});
    axios.post(`${url}logout`)
    navigate("/login")
  }
  const loggedInComponents = isLoggedIn ? <>
    <Route path="/select-character" element={<SelectCharacter user={user} handleLogout={handleLogout} />} />
    <Route path="/new-character" element={<CreateCharacter user={user} handleLogout={handleLogout} />} />
    <Route path="/" element={<>
      <GameController user={user} />
      <Hud user={user} />
    </>} />
  </> : ""

  const noUserComponents = isLoggedIn ? "" : <>
    <Route path="/login" element={<Login handleLogin={handleLogin} />} />
    <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
  </>

    const adminComponents = isLoggedIn && user != {} && user.is_admin ? <>
    <Route path="/admin" element={<Admin user={user} handleLogout={handleLogout} />} />
    <Route path="/admin/mapmaker" element={<MapMaker />} />
  </> : ""


  return (
    <div className="App">
      <Routes>
        {loggedInComponents}
        {noUserComponents}
        {adminComponents}
      </Routes>
    </div>
  );
}

export default App;
