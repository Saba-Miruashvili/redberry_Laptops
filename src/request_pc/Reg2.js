import Navbar from "../Navbar";
import "./Reg2.css";
import Name2 from "./Name2";
import Option2 from "./Options2"
import CPUname from "./CPUname"
import Radio from "./Radio"
import Date from "./Date";

const Reg2 = () => {
    return <nav className="registration2">
        
        <div id="BG1">
           
            <Navbar></Navbar>
            <div id="BG2">

                <div id="moveDown1">
                    <Name2 TopBoxname="laptop" name="ლეპტოპის სახელი" lowerText="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "></Name2>
                </div>

                <div id="moveDown2">
                    <Option2 DropDown="brand" url="https://pcfy.redberryinternship.ge/api/brands" defaultOption="ლეპტოპის ბრენდი" />
                </div>
                            <div id="Line15"></div>
                    <div id="moveDown3"><Option2 DropDown="CPU" url="https://pcfy.redberryinternship.ge/api/cpus" defaultOption="CPU" /></div>

                    <div id="CPUid1"><CPUname name="CPU-ს ბირთვი" lowerText="მხოლოდ ციფრები"></CPUname></div>

                    <div id="CPUid2"><CPUname name="CPU-ს ნაკადი"  lowerText="მხოლოდ ციფრები"></CPUname></div>
                            
                    <div id="moveDown4"><Name2 TopBoxname="laptop2" name="ლეპტოპის RAM (GB)" lowerText="მხოლოდ ციფრები"></Name2></div>
                    
                    <Radio name="მეხსიერების ტიპი" RNS="RNS" OP1="SSD" OP2="HDD" RS="RS1"></Radio>

                <div id="Line16"></div>

                <div id="moveDown5"><Name2 TopBoxname="laptop-price" name="ლეპტოპის ფასი" lowerText="მხოლოდ ციფრები"></Name2></div>

                    <Date placeholder ="დდ / თთ / წწწწ"/>

                    <Radio RS="RS2" RNS="RNS2" OP1="ახალი" OP2="მეორადი" name="ლეპტოპის მდგომარეობა"></Radio>
            </div>
            
        </div>
       
    </nav>
}

export default Reg2;