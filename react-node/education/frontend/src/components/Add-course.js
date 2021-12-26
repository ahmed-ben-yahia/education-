import { useEffect, useRef, useState } from "react"
import axios from "axios";
import Titel from "./Titel";
import { useHistory } from "react-router-dom";
const Courses = () => {
    const filePickerRef = useRef();
    let history = useHistory();
    let [enteredteacher, setEnteredteacher] = useState('');
    let [enteredDescription, setEnteredDescription] = useState('');
    let [enteredPrice, setEnteredPrice] = useState('');
    let [enteredName, setEnteredName] = useState('');
    const [file,setFile]=useState('');
    const [previewUrl,setpreviewUrl]=useState('');
    useEffect(()=>{
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload =()=>{
            setpreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    },[file]);
    const getTeacherHandler = (event) => {
        let Teacher = event.target.value;
        setEnteredteacher(Teacher)
        console.log('get techer ..', Teacher)
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
    const getNameHandler = (event) => {
        let Name = event.target.value;
        setEnteredName(Name)
        console.log('get name ..', Name)
    }
    const pickedIamgeHandler = () => {
        console.log('here pickedIamgeHandler button');
        filePickerRef.current.click();
     }
     
    const pickedHandler = (event) => {
        console.log('here pickedHandler',event.target.files);
        let pickedFile = event.target.files[0];
        setFile(pickedFile);
     }
   
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log('Submit form....');
        // let course = {
        //     name: enteredName,
        //     description: enteredDescription,
        //     price: enteredPrice,
        //     teacher: enteredteacher
            
        // }
        let formData = new FormData();
        formData.append('name', enteredName)
        formData.append('description', enteredDescription)
        formData.append('price', enteredPrice)
        formData.append('teacher', enteredteacher)
        formData.append('img', file)
        console.log('user course', formData);
        axios.post('http://localhost:3001/api/courses', formData).then(
            (result) => {
                console.log('response after course', result);
                history.push('/course')
            }
        )
    }
    return (
        <div className="container">
            <Titel titre="add Course" />
            <form onSubmit={submitFormHandler}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">teacher</label>
                    <input type="text" class="form-control" value={enteredteacher} onChange={getTeacherHandler} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">name</label>
                    <input type="text" class="form-control" value={enteredName} onChange={getNameHandler} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">price</label>
                    <input type="text" class="form-control" value={enteredPrice} onChange={getPriceHandler} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" rows="3" value={enteredDescription} onChange={getDescriptionHandler}></textarea>
                </div>
                <div class="mb-3">
                    <input ref={filePickerRef} type="file" class="form-control" style={{display:'none'}} accept=".jpg, .png, .jpeg" onChange={pickedHandler}></input>
                </div>
                <div class="text-center">
                <button type="button" class="btn btn-success" onClick={pickedIamgeHandler}>Pick Iamge</button>
                </div>
                <div className="text-center">
                    {previewUrl && <img src={previewUrl} style={{width:'200px',height:'200px'}}/>} 
                </div>
                <button type="submit" class="btn btn-primary">add Course</button>
            </form>
        </div>
    )
};
export default Courses    