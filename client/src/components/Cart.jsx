import React, { useState, useEffect } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";
import axios from "axios";

const Cart = () => {
  const [allCartItems, setAllCartItems] = useState([]);
  // grabs all the data in the DB
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/phones")
      .then((res) => setAllCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteItem = (e, itemId) => {
    e.preventDefault()

    axios.delete("http://localhost:3000/api/phones/" + itemId)
    .then((res) => {
        console.log(res.data)
        setAllCartItems(allCartItems.filter((item) => item._id !== itemId));
    })
    .catch((err) => console.log(err));
}

  const calculateTotal = () => {
     if(allCartItems == 0){
         alert("Must have items in cart to check out")
         
     }

     let sum = 0;

     allCartItems.map((item) => {
       const itemPrice = item.price;
       sum += itemPrice;
     })
     alert("total is " + sum);
  }

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
                 <button className="waves-effect btn-small" onClick={ (e) => deleteItem(e,item._id)} >delete</button>
            </div>
        </div>
        ))}
        <button className="waves-effect btn-large checkout-btn" onClick={calculateTotal}>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
