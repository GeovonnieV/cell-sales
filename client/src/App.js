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

function App() {

  const {iphones} = iphoneData 

  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" iphones={iphones} />
      </Router>
    </div>
  );
}

export default App;

