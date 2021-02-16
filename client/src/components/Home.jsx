import React, { useState, useEffect } from "react";
import {navigate, Link} from "@reach/router";

const Home = () => {
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
        {/* card 1 apple*/}
        <div className="card-apple">
          <div className="card-text">
            <h2>Apple</h2>
            <Link to="/apple">
              <button className="bottom-button">Shop Apple</button>
            </Link>
          </div>
        </div>
        {/* card 2 samsung */}
        <div className="card-samsung">
          <div className="card-text">
            <h2>Samsung</h2>
            <button className="bottom-button">Shop Samsung</button>
          </div>
        </div>
        {/* card 3 other*/}
        <div className="card-other">
          <div className="card-text">
            <h2>Other</h2>
            <button className="bottom-button">Shop Other</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
