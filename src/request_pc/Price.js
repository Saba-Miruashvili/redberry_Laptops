const Price = (props) => {

    return (    
        <div id="laptopPrice"> 
            <label id="fullname">{props.name}</label>
                <input id="Laptopname" type="price" minlength="2" placeholder={props.propname}  ></input>

            <p id="undertext" >{props.lowerText}</p>
    
        </div>
    );
    }
    
    export default Price;