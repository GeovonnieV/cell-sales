import { spawn } from 'child_process';
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
      {/* bottom */}
      <h2 className="bottom-head">Shop</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2 className="card-title">Apple</h2>
            <button>Shop</button>  
          </div>
          <div className="card-stats"> </div>
          {/* end card */}
        </div>
        {/* card 2 */}
        <div className="card-samsung">
          <div className="card-text">
            <h2>Samsung</h2>
            <button>click</button>  
          </div>
          <div className="card-stats"> </div>
          {/* end card */}
        </div>
        {/* card 3 */}
        <div className="card">
          <div className="card-img"> </div>
          <div className="card-text">
            <span className="date">4 days ago</span>
            <h2>Post One</h2>
            <p>lsdjfkls sdjfklj asjkfljkl jkasl fksldjfk  kljskd fj lkjsafl  jklsadfk lkjsadklfjkl klajs f kjlasdfjlk jsdfjoij asdfjkl</p>  
          </div>
          <div className="card-stats"> </div>
          {/* end card */}
        </div>
      </div>
    </div>
  );
}

export default App;

