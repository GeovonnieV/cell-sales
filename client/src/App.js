import './App.css';
import "./styles/app.scss"

function App() {
  return (
    <div>
      <div className="home">
        <div className="home-top-text">
          <h1>Cellular Sells</h1>
          <h3>Happy to see you</h3>
        </div>
      </div>
      <div className="homepage-bottom">
        <div className="cards-container">
            <div className="card">
                <figure className="front">
                  <h1>pro tier</h1>
                </figure>
                <figure className="back">
                  <h1>price</h1>
                  <button>click me</button>
                </figure>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

