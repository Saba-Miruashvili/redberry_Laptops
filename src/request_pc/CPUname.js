const CPUname = (props) => {

    return (    
        <div> 
            <label id="fullname">{props.name}</label>
                <input id="CPUinput" type="text" minlength="2" placeholder={props.propname}  ></input>
                
            <p id="cputext" >{props.lowerText}</p>
    
        </div>
    );
    }
    
    export default CPUname;
    