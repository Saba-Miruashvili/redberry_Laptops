import "../navbar.css"
import React, {useState, useEffect} from "react";


const regex = (/^[ა-ჰ]+$/)
const Topbox = (props) => {
    const [value, setValue] = useState("");
    const [email, setName] = useState('')
    console.log(email);
    const [error, setError] = useState('');


    const checkName = (e) => {
        setValue(e.target.value);

        localStorage.setItem(props.TopBoxname, e.target.value);
        setName(e.target.value);

        // alert('WRYYYY');

        if( regex.test(e.target.value) === false || e.target.value.length<2){
            setError('invalidi xar')
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
                <label id="fullname" style={{color:error?'red':'black'}}>{props.name}</label>
                    <input value={value} style={{borderColor:error?'red':'black'}} id="name" type="text" minlength="2" placeholder={props.propname}  onChange={checkName}></input>
                    
                <p id="undertext" style={{color:error?'red':'black'}}>{props.lowerText}</p>
    
            </div>
     );
}
 
export default Topbox;