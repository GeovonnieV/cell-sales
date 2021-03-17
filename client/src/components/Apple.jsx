import React, { useState } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Apple = (props) => {
  const { iphones, ipads, appleWatches } = props;

  // state
  const [iphoneColor, setIphoneColor] = useState("");
  const [ipadColor, setIpadColor] = useState("");
  const [watchColor, setWatchColor] = useState("");

  // add to cart functions

    // iphone add to cart
  const addIphoneToCart = (iphone) => {
    if (iphoneColor === "") {
      alert("pick a color");
    } else {
      axios.post("http://localhost:3000/api/phones", {
        title: iphone.name,
        price: iphone.price,
        color: iphoneColor,
      });

      alert(`${iphoneColor} ${iphone.name} added to cart`);
    }
  };

    // ipad add to cart
  const addIpadToCart = (ipad) => {
    if (ipadColor === "") {
      alert("pick a color");
    } else {
      axios.post("http://localhost:3000/api/phones", {
        title: ipad.name,
        price: ipad.price,
        color: ipadColor,
      });

      alert(`${ipadColor} ${ipad.name} added to cart`);
    }
  };

    // watch add to cart
  const watchAddToCart = (watch) => {
    if (watchColor === "") {
      alert("pick a color");
    } else {
      axios.post("http://localhost:3000/api/phones", {
        title: watch.name,
        price: watch.price,
        color: watchColor,
      });

      alert(`${watchColor} ${watch.name} added to cart`);
    }
  };



  return (
    <div>
      <CellNavbar />
      <div className="page-header">
      <h1 className="apple-heading">Apple</h1>
      <FontAwesomeIcon icon={faAppleAlt} size="3x" className="apple-icon-top" />

      </div>
      <div className="container">
        <h2 className="apple-row-name">Iphones</h2>
        <div className="apple-row">
          {iphones.map((iphone) => (
            <div className="apple-card">
              <img className="card-images" src={iphone.image} alt="" />
              <p className="card-item-name" style={{fontSize: "1rem"}}>{iphone.name}</p>
              <p>${iphone.price.toFixed(2)}</p>
              <br></br>
              {/* card btns */}
              <div className="btns-container">
                <button
                  className="waves-effect btn-small appleBtn"
                  onClick={() => addIphoneToCart(iphone)}
                >
                  Add
                </button>
                {/* dropDown */}
                <div class="dropdown">
                  <button>Color</button>
                  <div>
                    <option onClick={(e) => setIphoneColor(e.target.value)}>
                      Black
                    </option>
                    <option onClick={(e) => setIphoneColor(e.target.value)}>
                      White
                    </option>
                    <option onClick={(e) => setIphoneColor(e.target.value)}>
                      Gold
                    </option>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
          ))}
        </div>
        {/* begin ipad row */}
        <h2 className="apple-row-name">Ipads</h2>
        <div className="apple-row">
          {ipads.map((ipad) => (
            <div className="apple-card ipad-card">
              <img className="card-images" src={ipad.image} alt="" />
              <p className="card-item-name" style={{fontSize: "1rem"}}>{ipad.name}</p>
              <p>${ipad.price.toFixed(2)}</p>
              <br></br>
                     {/* card btns */}
                     <div className="btns-container">
                <button
                  className="waves-effect btn-small appleBtn"
                  onClick={() => addIpadToCart(ipad)}
                >
                  Add
                </button>
                {/* dropDown */}
                <div class="dropdown">
                  <button>Color</button>
                  <div>
                    <option onClick={(e) => setIpadColor(e.target.value)}>
                      Black
                    </option>
                    <option onClick={(e) => setIpadColor(e.target.value)}>
                      White
                    </option>
                    <option onClick={(e) => setIpadColor(e.target.value)}>
                      Gold
                    </option>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* begin watches row */}
        <h2 className="apple-row-name">Watches</h2>
        <div className="apple-row">
          {appleWatches.map((watch) => (
            <div className="apple-card">
              <img className="watch-images" src={watch.image} alt="" />
              <p className="card-item-name" style={{fontSize: "1rem"}}>{watch.name}</p>
              <p>${watch.price.toFixed(2)}</p>
              <br></br>
                        {/* card btns */}
                        <div className="btns-container">
                <button
                  className="waves-effect btn-small appleBtn"
                  onClick={() => watchAddToCart(watch)}
                >
                  Add
                </button>
                {/* dropDown */}
                <div class="dropdown">
                  <button>Color</button>
                  <div>
                    <option onClick={(e) => setWatchColor(e.target.value)}>
                      Black
                    </option>
                    <option onClick={(e) => setWatchColor(e.target.value)}>
                      Silver
                    </option>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apple;
