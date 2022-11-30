import { useState } from "react";
import login from "../../utils/login/login"
import './home.css';
import { Link } from "react-router-dom";
import Title from '../../components/Pages/Title'

function Login(){
  const [form, setForm] = useState({
    username:"",
    password:"",
    loginError:"",
  })


  function handleChange(e){
    if(e.target.name === "username") setForm({...form, [e.target.name]:e.target.value, usernameError:""})
    if(e.target.name === "password") setForm({...form, [e.target.name]:e.target.value, passwordError:""})
  }


  return <div id="home">
    <Title />
    <div  id="homeContainer">
      <h3>Login</h3>
      <div>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} onKeyDown={e => {if(e.code === "Enter") login()}} value={form.username}/><br/><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} onKeyDown={e => {if(e.code === "Enter") login()}} value={form.password}/><br/><br/>
        <button onClick={() => login(form, setForm)}>Login</button><br/>
        <span>{form.loginError}</span><br/><br/>
      </div>
      <Link to="/signup"><button>No Account?</button></Link>
    </div>
  </div>
}

export default Login;