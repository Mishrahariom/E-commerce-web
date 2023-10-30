import React from "react";
import { useContext } from "react";
import { ShopContext } from "../..//src/context/shop-context";
import { Link } from "react-router-dom";

import { ShoppingCart, User } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {

  const { cartItems } = useContext(ShopContext);

  // Calculate the total count of items in the cart
  const totalItemCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> 
          <User size={32} />
          
        </Link>
        {/* <Link to="/contact"> Login  </Link> */}
        <Link to="/register"> Register  </Link>

        

        <Link to="/cart"> 
          <ShoppingCart size={32} />
          {totalItemCount > 0 && (
            <span className="cart-count">{totalItemCount}</span>
          )}
        </Link>
      
      </div>
    </div>
  );
};
