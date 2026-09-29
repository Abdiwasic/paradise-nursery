import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../CartSlice";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotal);
  const totalCount = useSelector(selectCartCount);

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for shopping with Paradise Nursery 🌿");
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <div className="empty-cart">
            <p>Your cart is empty 🌱</p>
            <Link to="/plants">
              <button className="continue-btn">Browse Plants</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Your Cart</h2>

        {/* Summary */}
        <div className="cart-summary">
          <span>
            Total Items: <strong>{totalCount}</strong>
          </span>
          <span>
            Total Cost: <strong>${totalCost.toFixed(2)}</strong>
          </span>
        </div>

        {/* Items */}
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">
                  Unit price: ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity controls */}
              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              {/* Item total */}
              <span className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </span>

              {/* Delete */}
              <button
                className="delete-btn"
                onClick={() => dispatch(removeItem(item.id))}
                title="Remove item"
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="cart-actions">
          <Link to="/plants">
            <button className="continue-btn">← Continue Shopping</button>
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
