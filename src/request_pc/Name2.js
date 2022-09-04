import React, {useEffect,useState} from "react";

const regex = (/^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/)
const Name2 = (props) => {
    const [value, setValue] = useState("");
    const [email, setName] = useState('')
    console.log(email);
    const [error, setError] = useState('');


    const checkEmail = (e) => {
        setValue(e.target.value);

        localStorage.setItem(props.TopBoxname, e.target.value);
        setName(e.target.value);

        // alert('WRYYYY');

        if( regex.test(e.target.value) === false){
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
            <input  value={value} style={{borderColor:error?'red':''}} id="Laptopname" type="text" minlength="2" placeholder={props.propname}  onChange={checkEmail}></input>
            
        <p id="undertext" style={{color:error?'red':'black'}}> {props.lowerText} </p>

    </div>
);
}

export default Name2;
