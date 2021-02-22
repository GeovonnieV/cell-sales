import React, { useState, useEffect } from "react";
import CellNavbar from "./CellNavbar";
import axios from "axios";

const Cart = () => {
  const [allCartItems, setAllCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/phones")
      .then((res) => setAllCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
        <CellNavbar />
      <div className="container">
        <h1 className="cart-head">Cart</h1>
        {allCartItems.map((item) => (
        <div className="cart-container">
            <div className="cart-left">
                 <h3>{item.title}....</h3>
            </div>
            <div className="cart-right">
                 <h4>${item.price}</h4>
                 <button>delete</button>
            </div>
        </div>
        ))}
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
