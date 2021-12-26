import { useEffect, useState } from "react";
import { useParams } from "react-router";
const CourseInfo = ()=>{
    const {id}= useParams();
    const [loadedCourses, setLoadedCourses]=  useState();
    useEffect(()=>{
    const sendGetCourseRequest = async()=>{
        try {
            const response = await fetch (`http://localhost:3001/api/courses/${id}`)
            const responseData = await response.json(); 
            setLoadedCourses(responseData.findedCourses);
        } catch (error) {
            console.log('here error', error);

        }
  
    }
    sendGetCourseRequest();
},[]);


    return(<div>
        {loadedCourses && <div>
            <p>Course Name:{loadedCourses.name}</p>
            <p>Course Price:{loadedCourses.price}</p>
            <p>Course Description:{loadedCourses.description}</p>
            </div>}
    </div>);
    

}
export default CourseInfo;