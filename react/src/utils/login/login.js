import axios from 'axios';
const url = "http://localhost:3001/"

// function login(form, setForm){
//   setForm({...form, loginError:""}) //not sure this is necessary - clears loginError before making a new login request
//   if(form.username && form.password){ //this works
//     fetch(`${url}users?username=${form.username}&password=${form.password}`) //change this when you have a server
//       .then(res => res.json())
//       .then(json => {})
//       .catch(_ => setForm({...form, loginError:"Username or Password Incorrect", password:""})) // this is good
//   }
//   else if(form.username && !form.password){ // this is good
//     setForm({...form, loginError:"Please Enter a Password"})
//   }
//   else{ // this is good
//     setForm({...form, loginError:"Please Enter a Username"})
//   }
// }

function login(form, setForm, handleLogin, handleLogout){
  setForm({...form, loginError:""})
  if(form.username && form.password){
  axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(res => {
      if(res.data.logged_in) handleLogin(res)
      else handleLogout()
    })
    .catch(err => console.log('login error:', err))
  }
  else if(form.username && !form.password){
    setForm({...form, loginError:"Please Enter a Password"})
  }
  else{
    setForm({...form, loginError:"Please Enter a Username"})
  }
}

export default login;



