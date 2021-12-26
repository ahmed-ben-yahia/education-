import { useEffect, useState } from "react";
import { useParams } from "react-router";
const EventInfo = ()=>{
    const {id}= useParams();
    const [loadedEvent, setLoadedEvent]=  useState();
    useEffect(()=>{
    const sendGetEventRequest = async()=>{
        try {
            const response = await fetch (`http://localhost:3001/api/events/allEvent/${id}`)
            const responseData = await response.json(); 
            setLoadedEvent(responseData.findedEvent);
         
        } catch (error) {
            console.log('here error', error);

        }
  
    }
    sendGetEventRequest();
},[]);


    return(<div>
        {loadedEvent && <div>
            <p>Course Name:{loadedEvent.name}</p>
            <p>Course Price:{loadedEvent.price}</p>
            <p>Course Description:{loadedEvent.description}</p>
            </div>}
    </div>);
    

}
export default EventInfo;