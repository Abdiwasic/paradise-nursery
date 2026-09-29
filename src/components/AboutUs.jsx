import React from "react";

function AboutUs() {
  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 2rem" }}>
      <h1 style={{ color: "#1e3a2a", marginBottom: "1rem" }}>
        About Paradise Nursery
      </h1>

      <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#333" }}>
        Welcome to <strong>Paradise Nursery</strong> — your trusted destination
        for beautiful, healthy houseplants. Founded in 2018, we started as a
        small family greenhouse with a passion for bringing nature indoors.
        Today, we curate and ship over 200 varieties of indoor plants to plant
        lovers across the country.
      </p>

      <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#333" }}>
        Every plant in our collection is hand-selected by our expert
        horticulturists and grown with care in sustainable conditions. Whether
        you're a seasoned plant parent or just getting started, we have
        something green and gorgeous for you.
      </p>

      <p style={{ lineHeight: 1.8, color: "#333" }}>
        Our mission is simple:{" "}
        <em>
          make the world a greener, calmer, more beautiful place — one
          houseplant at a time.
        </em>{" "}
        We believe in sustainable sourcing, eco-friendly packaging, and
        providing honest, helpful care advice so your plants thrive long after
        they arrive at your door.
      </p>
    </div>
  );
}

export default AboutUs;
