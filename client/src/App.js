import './App.css';
// import sass file for styling
import "./styles/app.scss"
import {Router} from "@reach/router";
// import component files
import Home from "./components/Home";
import Apple from "./components/Apple";
import CellNavbar from "./components/CellNavbar";
// import store data
import iphoneData from "./storeData/apple/iphones-data";
import ipadData from "./storeData/apple/ipad-data";

function App() {

  const {iphones} = iphoneData 
  const {ipads} = ipadData 

  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" iphones={iphones} ipads={ipads} />
      </Router>
    </div>
  );
}

export default App;

