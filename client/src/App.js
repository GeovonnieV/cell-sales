import './App.css';
// import sass file for styling
import "./styles/app.scss"
import {Router} from "@reach/router";
// import component files
import Home from "./components/Home";
import Apple from "./components/Apple";
import Samsung from "./components/Samsung";
import CellNavbar from "./components/CellNavbar";
// import store data
import iphoneData from "./storeData/apple/iphones-data";
import ipadData from "./storeData/apple/ipad-data";
import appleWatchData from "./storeData/apple/apple-watches-data";
import samsungPhoneData from "./storeData/samsung/samsung-phones";
import samsungTabletData from "./storeData/samsung/samsung-tablets";
import samsungWatchData from "./storeData/samsung/samsung-watch-data";

function App() {
  // import store inventory
  const {iphones} = iphoneData; 
  const {ipads} = ipadData;
  const {appleWatches} = appleWatchData;
  const {samsungPhones} = samsungPhoneData;
  const {samsungTablets} = samsungTabletData;
  const {samsungWatches} = samsungWatchData;

  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" iphones={iphones} ipads={ipads} appleWatches={appleWatches} />
        <Samsung path="/samsung" samsungPhones={samsungPhones} samsungTablets={samsungTablets} samsungWatches={samsungWatches} />
      </Router>
    </div>
  );
}

export default App;

