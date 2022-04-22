import Uploader from "./Uploader";
import Display from "./Display";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element = {<Uploader/>}/>
      <Route path= "/display" element = {<Display/>}/>
    </Routes>
    </div>
  );
}

export default App;
