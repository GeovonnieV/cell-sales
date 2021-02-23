import React, { useState } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";
import axios from "axios";

const Samsung = (props) => {
  const { samsungPhones, samsungTablets, samsungWatches } = props;

  // state
  const [samsungPhoneColor, setSamsungPhoneColor] = useState("");

  // funtcions that add items to cart

  // phones
  const addSamsungPhoneToCart = (galaxy) => {
    if(samsungPhoneColor === ""){
      alert("pick a color")
    }else{
      axios.post("http://localhost:3000/api/phones", {
        title: galaxy.name,
        price: galaxy.price,
        color: samsungPhoneColor
      });
      
      alert(`${samsungPhoneColor} ${galaxy.name} added to cart`);

    }
    
  };

  // watches
  const addSamsungWatchToCart = (watch) => {
    axios.post("http://localhost:3000/api/phones", {
      title: watch.name,
      price: watch.price,
    });
  };

  // tablets
  const addSamsungTabletToCart = (tablet) => {
    axios.post("http://localhost:3000/api/phones", {
      title: tablet.name,
      price: tablet.price,
    });
  };

  return (
    <div>
      <CellNavbar />
      <h1 className="samsung-heading">Samsung</h1>
      <div className="container">
        <h2 className="samsung-row-name">Galaxys</h2>
        <div className="samsung-row">
          {samsungPhones.map((galaxy) => (
            <div className="samsung-card">
              <img className="card-images" src={galaxy.image} alt="" />
              <p className="card-item-name">{galaxy.name}</p>
              <p>${galaxy.price.toFixed(2)}</p>
              <div className="btns-container">
              <button
                className="waves-effect btn-small"
                onClick={() => addSamsungPhoneToCart(galaxy)}
              >
                Add
              </button>
              {/* dropDown */}
              <div class="dropdown">
                <button>Color</button>
                <div>
                  <option onClick={(e) => setSamsungPhoneColor(e.target.value)}>Black</option>
                  <option onClick={(e) => setSamsungPhoneColor(e.target.value)}>White</option>
                  <option onClick={(e) => setSamsungPhoneColor(e.target.value)}>Gold</option>
                </div>
              </div>

              </div>
              
              {/* end galaxy row */}
            </div>
          ))}
        </div>
        {/* begin watch row */}
        <h2 className="samsung-row-name">Watches</h2>
        <div className="samsung-row">
          {samsungWatches.map((watch) => (
            <div className="samsung-card">
              <img
                className="samsung-watch-card-images"
                src={watch.image}
                alt=""
              />
              <p className="card-watch-name">{watch.name}</p>
              <p>${watch.price.toFixed(2)}</p>
              <button
                className="waves-effect btn-small"
                onClick={() => addSamsungWatchToCart(watch)}
              >
                Add
              </button>
              {/* end galaxy row */}
            </div>
          ))}
        </div>
        {/* begin samsung tablet row */}
        <h2 className="samsung-row-name">Tablets</h2>
        <div className="samsung-row">
          {samsungTablets.map((tablet) => (
            <div className="samsung-card">
              <img
                className="samsung-tablet-card-images"
                src={tablet.image}
                alt=""
              />
              <p className="card-item-name">{tablet.name}</p>
              <p>${tablet.price.toFixed(2)}</p>
              <button
                className="waves-effect btn-small"
                onClick={() => addSamsungTabletToCart(tablet)}
              >
                Add
              </button>
              {/* end tablelt row */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samsung;
