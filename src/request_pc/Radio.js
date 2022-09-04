import React from 'react'
import './Reg2.css'

const RadioInput = (props) => {
  return (
    (
        <>
         <form>
              <h3 id={props.RNS}>{props.name}</h3>
              <div id={props.RS}>
                <input type="radio" id="op1" name="Options" value="opton1" />
                <label> {props.OP1} </label><br/>
                <input type="radio" id="op2" name="Options" value="option2"/>
                <label> {props.OP2} </label><br/>
              </div>
            </form>
        </>
    )
  )
}

export default RadioInput