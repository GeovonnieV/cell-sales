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
import appleWatchData from "./storeData/apple/apple-watches-data";

function App() {
  // import store inventory
  const {iphones} = iphoneData; 
  const {ipads} = ipadData;
  const {appleWatches} = appleWatchData;

  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" iphones={iphones} ipads={ipads} appleWatches={appleWatches} />
      </Router>
    </div>
  );
}

export default App;

