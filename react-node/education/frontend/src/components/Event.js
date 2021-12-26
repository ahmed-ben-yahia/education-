import { useState } from "react"
import axios from "axios";
import Titel from "./Titel";

import { useHistory } from "react-router-dom";


const Events = () => {
  let history = useHistory();
  let [enteredName, setEnteredName] = useState('');
  let [enteredDescription, setEnteredDescription] = useState('');
  let [enteredPrice, setEnteredPrice] = useState('');
  let [enteredDate, setEnteredDate] = useState('');


  const getNameHandler = (event) => {
    let Name = event.target.value;
    setEnteredName(Name)
    console.log('get name ..', Name)
  }
  const getPriceHandler = (event) => {
    let price = event.target.value;
    setEnteredPrice(price)
    console.log('get price ..', price)
  }
  const getDescriptionHandler = (event) => {
    let description = event.target.value;
    setEnteredDescription(description)
    console.log('get description ..', description)
  }
  const getDateHandler = (event) => {
    let date = event.target.value
    setEnteredDate(date)
    console.log('get date ..', date)
  }
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log('Submit form....');
    let events = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
      date: enteredDate
    }
    console.log('user events', events);
    axios.post('http://localhost:3001/api/events', events).then(
      (result) => {
        console.log('response after events', result);
        history.push('/event')
      }
    )
  }
  return (
    <div className="container">
      <Titel titre="add Event" />
      <form onSubmit={submitFormHandler}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" value={enteredName} onChange={getNameHandler} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" rows="3" value={enteredDescription} onChange={getDescriptionHandler}></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Price</label>
          <input type="text" class="form-control" value={enteredPrice} onChange={getPriceHandler} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Date</label>
          <input type="text" class="form-control" value={enteredDate} onChange={getDateHandler} />
        </div>
        <button type="submit" class="btn btn-primary">add Event</button>
      </form>
    </div>
  )
};
export default Events