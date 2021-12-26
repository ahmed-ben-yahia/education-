import { Link } from "react-router-dom";
import Titel from "./Titel";
import { useEffect, useState } from "react"
const Event = () =>{
    const [loadedEvents,setLoadedEvents]= useState();
    useEffect(()=>{
        const sendGetAllEventsRequest = async ()=>{
    try {
        const response = await fetch("http://localhost:3001/api/events");
        const responseData = await response.json();
        console.log('response from BE',responseData.findedEvent);
        setLoadedEvents(responseData.findedEvent);
    } catch (error) {
        console.log('here error',error);
    }   
    };
    sendGetAllEventsRequest();
},[]);
const deletEvent = async (event) => {
    let id = event.target.value;
    console.log('here btn id', id);
    try {
        const response = await fetch(`http://localhost:3001/api/events/${id}`, { method: "DELETE" });
        const responseData = await response.json();
        console.log('response from BE', responseData);
        setLoadedEvents(responseData.Event);
    } catch (error) {
        console.log('here error', error);
    }
}
    return(
        <div className="container">
<Titel titre="All Events" />
<table  className="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>date</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {loadedEvents && loadedEvents.map(event =>(
    <tr>
            <td>{event._id}</td>
            <td>{event.name}</td>
            <td>{event.price}</td>
            <td>{event.description}</td>
            <td>{event.date}</td>
            
            <td>
            <Link to={`/edit-event/${event._id}`} className="btn btn-primary">Display</Link>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger" value={event._id} onClick={deletEvent}>Delete</button>
            </td>
        </tr>
        ))}
    </tbody>
</table>
        </div>
    )
}
export default Event;