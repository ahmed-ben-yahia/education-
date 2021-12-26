import axios from "axios";
import{useState} from"react";
import { useHistory } from "react-router-dom";
import Titel from "./Titel";
import {toast} from 'react-toastify'

const Login = () => {
  let history = useHistory();
  let [enteredEmail,setEnteredEmail] = useState('');
  let [enteredPwd,setEnteredPwd] = useState('');
    const getEmail = (event)=>{
      let email = event.target.value;
      setEnteredEmail(email)
        console.log('get email ..',email)
    }
    const getPassword = (event)=>{
      let password= event.target.value
      setEnteredPwd(password)
        console.log('get getPassword ..',password)
    }
    const submitFormHandler =(event)=>{
        event.preventDefault();
        console.log('Submit form....');
        let login ={
          email:enteredEmail,
          pwd:enteredPwd
        }
        console.log('user login',login)
        axios.post('http://localhost:3001/api/users/login',login).then(
          (result)=>{
            console.log('here result login ',result.data.message)
            const message = result.data.message
            if (message == 'Please check Email') {
              toast.error('check  your data',{autoClose:4000,icon: "🚀"})
            } else {
              if (message == 'Please check Pwd') {
                toast.error('check  your data',{autoClose:4000,icon: "🚀"}) 
              } else {
                history.push('/github')
              }
            }
          }
        )
    }
    return (
        <div className="container">
 <form onSubmit={submitFormHandler}>
  <Titel titre="Login"/>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" value={enteredEmail} onChange={getEmail}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" value={enteredPwd} onChange={getPassword} />
    <samp id='message'> </samp>
  </div>
  <div class="mb-3 form-check">
   
  </div>
  <button type="submit" class="btn btn-primary" onClick={toast}>login</button>
</form>
      </div>
    )
}
export default Login