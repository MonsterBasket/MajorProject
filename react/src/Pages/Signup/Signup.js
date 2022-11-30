import { useRef, useState } from "react";
import login from "../../utils/login/login"
import Title from '../../components/Pages/Title'


function Signup(){
  const url = "http://localhost:3001/"
  const [form, setForm] = useState({
    username:"",
    usernameError:"",
    email:"",
    emailError:"",
    password1:"",
    password2:"",
    password1Error:"",
    password2Error:""
  })
  const timer = useRef(0);

  function signup(){ //not even looking at this until I have rails setup
    if (/*checks.username && checks.password && */form.fName && form.lName){
      fetch(`${url}users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
        username:form.username,
        email:form.email,
        password:form.password1,
        })
      })
      .then(res => res.json())
      .then(json => login(form, setForm))
      .catch(err => console.log(JSON.stringify(err), JSON.stringify(err.message)));
    }
    else {
      alert("please enter all fields correctly")
    }
  }

  function handleChange(e){
    // I should do some sanitization, but I'll probably use a library
    if(e.target.name === "username") setForm({...form, [e.target.name]:e.target.value, usernameError:""})
    if(e.target.name === "email")    setForm({...form, [e.target.name]:e.target.value, emailError:""})
    else if(e.target.name === "password1"){
      if(e.target.value === "" || e.target.value.length > 5){ //6 digit passwords are enough since it's a fake website :D
        setForm({...form, [e.target.name]:e.target.value, password1Error:""})
      }
      else{
        setForm({...form, [e.target.name]:e.target.value, password1Error:"❌ Passwords must be at least 6 digits"})
      }
    }
    else if(e.target.name === "password2"){
      if(e.target.value.length < 6){
        setForm({...form, [e.target.name]:e.target.value, password2Error:""})
      }
      else if(e.target.value === form.password1){
        setForm({...form, [e.target.name]:e.target.value, password2Error:"✅ Passwords match!"})
      }
      else{
        setForm({...form, [e.target.name]:e.target.value, password2Error:"❌ Passwords don't match!"})
      }
    }
  }


  return <div id="signup">
    <div className="smallHeading">
    <Title />
    </div>
    <div>
      <h3>Create Account</h3>
      <div>
        <input type="text" name="username" placeholder="Choose a Username" onChange={handleChange} value={form.username}/><br/>
        <span>{form.usernameError}</span><br/>
        <input type="text" name="email" placeholder="Email" onChange={handleChange} value={form.email}/><br/>
        <span>{form.emailError}</span><br/>
        <input type="password" name="password1" placeholder="Password" onChange={handleChange} value={form.password1}/><br/>
        <span>{form.password1Error}</span><br/>
        <input type="password" name="password2" placeholder="Repeat Password" onChange={handleChange} onKeyDown={e => {if(e.code === "Enter") signup()}} value={form.password2}></input><br/>
        <span>{form.password2Error}</span><br/>
        <button onClick={signup}>Sign-Up</button>
      </div>
    </div>
  </div>
}

export default Signup;