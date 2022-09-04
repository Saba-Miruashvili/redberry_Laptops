import React from 'react';
import Rlogo from './img/logo.png';
import Landingpng from './img/Landing.png';
import {Link} from "react-router-dom"
import Button from './Button';
import "./Css.css"


export default function Landing() {
  return (<div class="logo">
  <img className='logo' src={Rlogo} alt="" />
  <img className='Landingpng' src={Landingpng} alt="" />
  <div className='Lbutton'>
  {/* <Link to="./Navbar"> <Button name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"/></Link> */}
  {/* <Button name="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"/> */}

  <Link to='/Reg1'><Button parry="button" name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"/></Link>

  <Link to='/'><Button parry="button" name="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"/></Link>


  </div>

  
  
</div>)
}