import "../navbar.css"
import React from "react";
import { useState,useEffect } from "react";

const regex = /^(\+995)\d{9}$/gm;


const Email = (props) => {
    const [value, setValue] = useState("");
    const [email, setEmail] = useState('')
    console.log(email);
    const [error, setError] = useState('');


    const checkEmail = (e) => {
        setValue(e.target.value);

        localStorage.setItem(props.TopBoxname, e.target.value);
        setEmail(e.target.value);

        // alert('WRYYYY');

        if( regex.test(e.target.value) === false || e.target.value.length<2){
            setError('invalid')
            // alert('WRYYYY')


        }else {
            setError('');
            return true;
        }
    }
    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setValue(localStorage.getItem(props.TopBoxname));}, []);

    return (    
            <div> 
                <label id="fullname"  style={{color:error?'red':'black'}}>{props.name}</label>
                    <input value={value} id="Email" style={{borderColor:error?'red':'black'}} type="Phone" placeholder={props.propname} onChange={checkEmail}></input>
           
                <p id="undertext1"  style={{color:error?'red':'black'}}>{props.lowerText}</p>
    
            </div>

     );
}
 
export default Email;