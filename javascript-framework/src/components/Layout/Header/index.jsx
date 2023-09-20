import React from "react";
import Navbar from "../Nav";
import CartIcon from "../../Cart/CartIcon";

function Header({ onSearch }) {
  return (
    <header>
      <Navbar onSearch={onSearch} />
      <div className="cart-container">
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
