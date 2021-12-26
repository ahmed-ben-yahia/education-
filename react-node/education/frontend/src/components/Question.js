import { useEffect, useState } from "react";

const Question=()=>{
    
    const [loadedQuestion,setLoadedQuestion]= useState();
 useEffect(()=>{
    
        const sendGetAllQuestionsRequest= async()=>{
            const response = await fetch ("http://localhost:3001/api/question");
            const responseData = await response.json();
            console.log('responseData',responseData)
            setLoadedQuestion(responseData.findedQuestion);
        
    
    };
     sendGetAllQuestionsRequest()
 },[])
    return(
        <div className="container">
        <table  className="table">
            <thead>
                <tr>
                    <th>email</th>
                    <th>message</th>
                </tr>
            </thead>
            <tbody>
            {loadedQuestion && loadedQuestion.map(question =>(
            <tr>
                   
                    <td>{question.email}</td>
                    <td>{question.message}</td>
                    
                    
                   
                </tr>
                ))}
            </tbody>
        </table>
                </div>
    )
}
export default Question;