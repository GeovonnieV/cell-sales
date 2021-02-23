import React, { useState, useEffect } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";
import axios from "axios";

const Cart = () => {
  // State
  const [allCartItems, setAllCartItems] = useState([]);
  const [newColor, setNewColor] = useState("");



  // grabs all the data in the DB
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/phones")
      .then((res) => setAllCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);


  // set the new color state
  const updateColor = (e,itemId) => {
      setNewColor(e.target.value)

      axios.put("http://localhost:3000/api/phones/" + itemId,  {
        color: newColor
     })

  }

  
  // delete item funtion
  const deleteItem = (e, itemId) => {
    e.preventDefault();

    axios
      .delete("http://localhost:3000/api/phones/" + itemId)
      .then((res) => {
        console.log(res.data);
        setAllCartItems(allCartItems.filter((item) => item._id !== itemId));
      })
      .catch((err) => console.log(err));
  };

  // add up all itmes prices 
  const calculateTotal = () => {
    if (allCartItems == 0) {
      alert("Must have items in cart to check out");
    }

    let sum = 0;

    allCartItems.map((item) => {
      const itemPrice = item.price;
      sum += itemPrice;
    });
    
    if(sum > 1){
      alert(`Your total is $${sum}`)
    }

    axios.delete("http://localhost:3000/api/phones")
    // reload page
    window.location.reload();
  };

  return (
    <div>
      <CellNavbar />
      <div className="container">
        <h1 className="cart-head">Cart</h1>
        {allCartItems.map((item) => (
          <div className="cart-container">
            <div className="cart-left">
              <h3>{item.title}: {item.color}</h3>
              {/* dropDown */}
              <div class="dropdown">
                <button>Color</button>
                <div>
                  <option onClick={(e) => updateColor(e,item._id)}>White</option>
                  <option >White</option>
                  <option >Gold</option>
                </div>
              </div>
            </div>
            <div className="cart-right">
              <h4>${item.price}</h4>
              <button
                className="waves-effect btn-small"
                // delete item
                onClick={(e) => deleteItem(e, item._id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
        <button
          className="waves-effect btn-large checkout-btn"
          onClick={calculateTotal}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
