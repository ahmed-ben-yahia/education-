import { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaRegPaperPlane } from 'react-icons/fa';
toast.configure()
const Newsletter = () => {
    let history = useHistory();
    let [enteredemail, setEnteredemail]=useState('');
    let [enteredMessage, setEnteredMessage]=useState('');
    
    const getemailHandler = (event)=>{
        let email = event.target.value
        setEnteredemail(email);
        console.log('sgqg',email)
    }
    const getmessageHandler = (event)=>{
        let message = event.target.value
        setEnteredMessage(message);
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log('Submit form....');
        let questions = {
          email: enteredemail,
          message: enteredMessage
        }
        console.log('user events', Newsletter);
        axios.post('http://localhost:3001/api/question', questions).then(
          (result) => {
            console.log('response after evquestionents', result);
            history.push('/question')

          }
        )
      }
      const notify = ()=>{
        if ((enteredemail && enteredMessage)== true) {
          toast('Thank you, we will read your message and send an answer to your email',{autoClose:7000,icon: "🚀"})
        } else {
          toast(' check your data',{autoClose:7000,icon: "🚀"})
        }
        
      }
    return (
        <div>
            <h4>Newsletter</h4>
            <form onSubmit={submitFormHandler}>
                <div className="form-group">
                    <label className="text-white pb-1">Your email adress :</label>
                    <input type="email" className="form-control inputs-style text-light" value={enteredemail} onChange={getemailHandler} />
                </div>
                <div className="form-group">
                    <label className="text-white pb-1">Your message :</label>
                    <textarea className="form-control inputs-style text-light"value={enteredMessage} onChange={getmessageHandler} />
                </div>
                <div className="text-center">
                    <button type="submit" class="btn btn-light ps-3 pe-3 fw-bold mt-3 "  onClick={notify}>Envoyer <FaRegPaperPlane/></button>
                </div>
​
            </form>
        </div>
    );
}
export default Newsletter; 