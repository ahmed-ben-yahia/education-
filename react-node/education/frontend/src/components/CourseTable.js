import { Link } from "react-router-dom";
import Titel from "./Titel";
import { useEffect, useState } from "react"
const Coursess = () => {
    const [loadedCourses, setLoadedCourses] = useState();
    useEffect(() => {
        const sendGetAllCoursesRequest = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/courses");
                const responseData = await response.json();
                console.log('response from BE', responseData.courses);
                setLoadedCourses(responseData.courses);
            } catch (error) {
                console.log('here error', error);
            }
        };
        sendGetAllCoursesRequest();
    }, []);
    const deletCourse = async (event) => {
        let id = event.target.value;
        console.log('here btn id', id);
        try {
            const response = await fetch(`http://localhost:3001/api/courses/${id}`, { method: "DELETE" });
            const responseData = await response.json();
            console.log('response from BE', responseData);
            setLoadedCourses(responseData.courses);
            
        } catch (error) {
            console.log('here error', error);
        }
    }
    return (
        <div className="container">
            <Titel titre="All Courses" />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loadedCourses && loadedCourses.map(course => (
                        <tr key={course._id}>
                            <td>{course._id}</td>
                            <td>{course.name}</td>
                            <td>{course.price}</td>
                            <td>{course.description}</td>

                            <td>
                                <Link to={`/course-info/${course._id}`} className="btn btn-primary">Display</Link>
                                <Link to={`/edit-course/${course._id}`} className="btn btn-info">Edit</Link>
                                <button className="btn btn-danger" value={course._id} onClick={deletCourse}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Coursess;