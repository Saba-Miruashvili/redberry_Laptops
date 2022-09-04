import {Link , Routes , BrowserRouter , Route} from "react-router-dom" 
import Landing from "./Landing";
import "./Css.css"
import Reg1 from "./request_pc/Reg1";
import Reg2 from "./request_pc/Reg2";

import "./Fonts/HelveticaNeue/HelveticaNeue.ttc";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/"></Link>
      <Link to="/Navbar"></Link>
  <Routes>
    <Route exact path="/" element={<Landing/>}></Route>
    <Route exact path="/Reg1" element={<Reg1/>}></Route>
    <Route exact path="/Reg2" element={<Reg2/>}></Route>

  </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;