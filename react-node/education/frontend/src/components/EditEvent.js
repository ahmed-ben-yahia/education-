
import axios from "axios";
import Titel from "./Titel";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const EditCourse = () => {
    const { id } = useParams();
    const [loadedCourses, setLoadedCourses] = useState();
    useEffect(() => {
        const sendGetCourseRequest = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/event/${id}`)
                const responseData = await response.json();
                setLoadedCourses(responseData.findedCourses);
            } catch (error) {
                console.log('here error', error);
            }
        }
        sendGetCourseRequest();
    }, [])

    let history = useHistory();
    let [enteredDescription, setEnteredDescription] = useState('');
    let [enteredPrice, setEnteredPrice] = useState('');
    let [enteredName, setEnteredName] = useState('');


    
    const getPriceHandler = (event) => {
        let price = event.target.value;
        setEnteredPrice(price)
        
    }
    const getDescriptionHandler = (event) => {
        let description = event.target.value;
        setEnteredDescription(description)
        
    }
    const getNameHandler = (event) => {
        let Name = event.target.value;
        setEnteredName(Name)
    }
    const submitEditCourseHandler = (event) => {
        event.preventDefault();
        console.log('Submit form....');
        let course = {
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice,
            teacher: enteredteacher
        }
        console.log('user course', course);
        axios.put(`http://localhost:3001/api/courses/${id}`, course).then(
            (result) => {
                console.log('response after course', result);
                history.push('/course')
            }
        )
    }
    return (
        <div className="container">
            <Titel titre="Edit Course" />
            {loadedCourses && <div>
            <form onSubmit={submitEditCourseHandler}>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">name</label>
                    <input type="text" class="form-control" defaultValue={loadedCourses.name} onChange={getNameHandler} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">price</label>
                    <input type="text" class="form-control" defaultValue={loadedCourses.price} onChange={getPriceHandler} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" rows="3" defaultValue={loadedCourses.description} onChange={getDescriptionHandler}></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Edit Course</button>
            </form>
            </div>}
        </div>
    )
};

export default EditCourse