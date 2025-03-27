import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mia
        </Link>
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-light">
            🍕 Home
          </Link>
          {isLoggedIn ? (
            <button
              className="btn btn-danger"
              onClick={() => setIsLoggedIn(false)}
            >
              🔒 Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                📝 Register
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-warning position-relative">
            🛒 Carrito
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
