import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

// ── Landing Page ──────────────────────────────────────────────
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-card">
          <h1>
            <span>Paradise</span> Nursery
          </h1>
          <p>
            Welcome to Paradise Nursery — where every corner of your home gets a
            little greener. We hand-pick and lovingly grow over 200 varieties of
            indoor plants, from air-purifying classics to rare tropical
            beauties. Whether you're decorating a studio apartment or filling a
            sunroom, our plants arrive healthy, vibrant, and ready to thrive in
            your space.
          </p>
          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
