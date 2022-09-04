import Navbar from "../Navbar"
import "./Reg1.css"
import Topbox from "./Topbox";
import Options from "./Options"
import Email from "./Email";
import Phone from "./Phone"
import Button from "../Button";
import {Link} from "react-router-dom";



const Reg1 = () => {
    return ( 
        
        <div className="BG1">
            <Navbar></Navbar>
            <div id="line"></div>
            <div className="BG2">

                <div id="topflex">
                    <Topbox name="სახელი" TopBoxname="name" propname="გრიშა" lowerText="მინიმუმ 2 სიმბოლო, ქართული ასოები"/>
                    <Topbox name="გვარი" TopBoxname="surname" propname="ბაგრატიონი" lowerText="მინიმუმ 2 სიმბოლო, ქართული ასოები"/>
                </div>
                        <Options selectInputValue="ChosenOption" id="options" url="https://pcfy.redberryinternship.ge/api/teams" defaultOption="თიმი"/>   
                        <Options selectInputValue="ChosenOption2" id="" url="https://pcfy.redberryinternship.ge/api/positions" defaultOption="პოზიცია"/>
                    <div id="DownDiv">
                        <Email name="მეილი" propname="grish666@redberry.ge" lowerText="უნდა მთავრდებოდეს @redberry.ge-ით"/>
                        
                        <Phone TopBoxname="phone" name="ტელეფონის ნომერი" propname="+995 598 00 07 01" lowerText="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"/>
                    </div>
                            <div id="Reg2Button">
                                    <Link to='/Reg2'><Button parry="Reg2Button" name="შემდეგი"/></Link>
                            </div>
            </div>

        </div>
     );
}
 
export default Reg1;
