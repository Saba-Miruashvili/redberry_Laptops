// import "../navbar.css"
// import React from "react";






// const Email = (props) => {
//     return (    
//             <div> 
//                 <label id="fullname">{props.name}</label>
//                     <input id="Email" type="email" placeholder={props.propname}></input>
//                 <p id="undertext1">{props.lowerText}</p>
    
//             </div>
//      );
// }
 
// export default Email;

import "../navbar.css"
import React from "react";
import { useState , useEffect} from "react";

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
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
                    <input value={value} style={{borderColor:error?'red':'black'}} id="Email" type="email" placeholder={props.propname}  onChange={checkEmail} ></input>
                <p id="undertext1" style={{color:error?'red':'black'}}>{props.lowerText}</p>
    
            </div>
     );
}
 
export default Email;


// function ValidateEmail() {
//     var input = document.getElementsByName('text1')[0];
//     //   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//       var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com/;
//       if (input.value.match(email)) {
    
//         alert("Valid email address!");
    
//         document.form1.text1.focus();
    
//         return true;
    
//       } else {
    
//         alert("Invalid email address!");
    
//         document.form1.text1.focus();
    
//         return false;
    
//       }
    
//     }