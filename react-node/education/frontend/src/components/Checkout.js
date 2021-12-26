import React, {useState} from 'react';
// styling
import './Checkout.css';
// components
import PopUp from './PopUp';

const Checkout = () => {
    // controls if popup displays
    const [popUp, setPopUp] = useState(false)
    // adds class to darken background color
  
    
    return (
        

        <div className={"Checkout" }>
            
        <div className={"cart" }>            
            <table >
           
            </table>
            <button onClick={()=>setPopUp(true)}>Checkout!</button>
            <button>Checkout!!!!!</button>

        </div>
            {popUp && <PopUp setPopUp={setPopUp}/>}
        </div>
        

    );
}

export default Checkout;
