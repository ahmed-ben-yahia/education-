import { useState } from "react"
import axios from "axios";
import Titel from "./Titel";
const Signup = () =>{

  let [enteredFirstName,setEnteredFirstName] = useState('');
  let [enteredLastName,setEnteredLastName] = useState('');
  let [enteredEmail,setEnteredEmail] = useState('');
  let [enteredPwd,setEnteredPwd] = useState('');
  let [enteredConfirmPwd,setEnteredConfirmPwd] = useState('');
  let [enteredTel,setEnteredTel] = useState('');
  
    const getFirstNameHandler = (event)=>{
      let FirstName = event.target.value;
      setEnteredFirstName(FirstName)
        console.log('get email ..',FirstName)
    }
    const getLastNameHandler = (event)=>{
      let LastName = event.target.value;
      setEnteredLastName(LastName)
        console.log('get email ..',LastName)
    }
    const getEmailHandler = (event)=>{
      let email = event.target.value;
      setEnteredEmail(email)
        console.log('get email ..',email)
    }
    const getPasswordHandler = (event)=>{
      let password= event.target.value
      setEnteredPwd(password)
        console.log('get getPassword ..',password)
    }
    const getConfirmPasswordHandler = (event)=>{
      let confirmPassword= event.target.value
      setEnteredConfirmPwd(confirmPassword)
        console.log('get getPassword ..',confirmPassword)
    }
    const gettelHandler = (event)=>{
      let tel= event.target.value
      setEnteredTel(tel)
        console.log('get getPassword ..',tel)
    }
  const submitFormHandler =(event)=>{
    event.preventDefault();
    console.log('Submit form....');
    let Signup ={
      firstName:enteredFirstName,
      lastName:enteredLastName,
      email:enteredEmail,
      pwd:enteredPwd,
      tel:enteredTel
    }
    console.log('user Signup',Signup);
    axios.post('http://localhost:3001/api/users/Signup',Signup).then(
      (result)=>{
        console.log('response after signup',result);
      }
    )
    }
    return(
        <div className="container">
          <Titel titre="Signup"/>
           <form onSubmit={submitFormHandler}>
           <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" class="form-control" value={enteredFirstName} onChange={getFirstNameHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="text" class="form-control" value={enteredLastName} onChange={getLastNameHandler}  />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control"value={enteredEmail} onChange={getEmailHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"value={enteredPwd} onChange={getPasswordHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">confirm Password</label>
    <input type="password" class="form-control" value={enteredConfirmPwd} onChange={getConfirmPasswordHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">tel</label>
    <input type="password" class="form-control"value={enteredTel} onChange={gettelHandler} />
  </div>
  <button type="submit" class="btn btn-primary">Signup</button>
</form>
        </div>
    )
}
export default Signup