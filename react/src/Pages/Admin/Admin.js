import { Link } from "react-router-dom";
import axios from 'axios';
import Title from '../../components/Pages/Title'
import { useEffect, useState } from "react";
import { serverUrl } from "../../App";

function Admin({handleLogout}){
  const [users, setUsers] = useState([])

  useEffect(() => {loadUsers()}, [])

  function loadUsers(){
    axios.get(`${serverUrl}users`)
    .then(res => setUsers(res.data.users))
    .catch(err => console.log(err))
  }

  function displayUser(user){
    return <Link to={`user/${user.id}`}>{user.username} - {user.email} - {user.is_admin}</Link>
  }



  return <div id="adminPortal">
    <button onClick={handleLogout}>Logout</button>
    <Link to="/admin/mapmaker"><button>Map Editor</button></Link>
    <Title style={{left: "0px"}}/><br/><br/>
    <div id="userList">
      {/* {console.log(users.data.users)} */}
      {users.map(user => <div key={user.username}>{displayUser(user)}</div>)}
    </div>
  </div>
}

export default Admin;