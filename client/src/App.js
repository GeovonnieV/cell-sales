import './App.css';
// import sass file for styling
import "./styles/app.scss"
import {Router} from "@reach/router";
// import component files
import Home from "./components/Home";
import Apple from "./components/Apple";

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Apple path="/apple" />
      </Router>
    </div>
  );
}

export default App;

