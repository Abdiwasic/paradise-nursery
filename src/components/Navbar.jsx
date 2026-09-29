import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount } from "../CartSlice";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <span className="navbar-brand">🌿 Paradise Nursery</span>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plants">Plants</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="cart-icon-wrap">
              🛒
              <span className="cart-count">{cartCount}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
