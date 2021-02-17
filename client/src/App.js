import './App.css';
// import sass file for styling
import "./styles/app.scss"
import {Router} from "@reach/router";
// import component files
import Home from "./components/Home";
import Apple from "./components/Apple";
import CellNavbar from "./components/CellNavbar";

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" />
        <CellNavbar path="/navbar" />
      </Router>
    </div>
  );
}

export default App;

