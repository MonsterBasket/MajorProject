import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import Admin from "./Pages/Admin/Admin";
import MapMaker from "./Pages/DevTools/MapMaker"
import Login from "./Pages/Login/Login.js"
import Signup from "./Pages/Signup/Signup"
import SelectCharacter from "./Pages/SelectCharacter/SelectCharacter"
import GameController from "./Pages/Game/GameController"
import Hud from "./components/UserInterface/Hud"
export const serverUrl = "http://localhost:3001/"
// export const serverUrl = "http://monster-basket.fly.dev/"

function App(){
  const [user, setUser] = useState([false,{}])
  // const [isLoggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate();
  const [character, setPlayCharacter] = useState({})

  useEffect(() => loginStatus(), [])

  function loginStatus(){
    axios.get(`${serverUrl}logged_in`, {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) handleLogin(response.data)
      else handleLogout()
    })
    .catch(error => console.log('api errors:', error))
  }

  function handleLogin(data) {
    setUser([true,data.user])
    // setLoggedIn(true)
  }
  function handleLogout(){
    axios.post(`${serverUrl}logout`, user[1], {withCredentials: true})
    .then(() =>{
      setUser([false,{}]);
      // setLoggedIn(false);
    })
  }

  useEffect(()=> {
    if (user[0]) navigate("/select-character")
    else navigate("/login")
  }, [user[0]])

  const loggedInComponents = user[0] ? <>
    <Route path="/select-character" element={<SelectCharacter user={user[1]} setPlayCharacter={setPlayCharacter} handleLogout={handleLogout} />} />
    <Route path="/" element={<>
      <GameController character={character} />
      <Hud character={character} />
    </>} />
  </> : ""

  const noUserComponents = !user[0] ? <>
    <Route path="/login" element={<Login handleLogin={handleLogin} />} />
    <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
  </> : ""

  const adminComponents = user[0] ? <> {/*&& user.is_admin ? <>*/}
    <Route path="/admin" element={<Admin user={user[1]} handleLogout={handleLogout} />} />
    <Route path="/admin/mapmaker" element={<MapMaker />} />
  </> : ""


  return (
    <div className="App">
      <Routes>
        {noUserComponents}
        {loggedInComponents}
        {adminComponents}
      </Routes>
    </div>
  );
}

export default App;
