import Navbar from "../Nav";
import CartIcon from "../../Cart/CartIcon";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="cart-container">
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
