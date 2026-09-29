import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectIsInCart } from "../CartSlice";
import Navbar from "./Navbar";

const categories = [
  {
    name: "Air-Purifying Plants",
    plants: [
      {
        id: "p1",
        name: "Peace Lily",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&auto=format&fit=crop",
      },
      {
        id: "p2",
        name: "Spider Plant",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1637939228762-95f38e0dde48?w=400&auto=format&fit=crop",
      },
      {
        id: "p3",
        name: "Snake Plant",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop",
      },
      {
        id: "p4",
        name: "Boston Fern",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
      },
      {
        id: "p5",
        name: "Bamboo Palm",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=400&auto=format&fit=crop",
      },
      {
        id: "p6",
        name: "Aloe Vera",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Low-Light Plants",
    plants: [
      {
        id: "p7",
        name: "Pothos",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?w=400&auto=format&fit=crop",
      },
      {
        id: "p8",
        name: "ZZ Plant",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1614594895987-86d9eb0e7b50?w=400&auto=format&fit=crop",
      },
      {
        id: "p9",
        name: "Cast Iron Plant",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1589393922695-ef4c2f9ddc72?w=400&auto=format&fit=crop",
      },
      {
        id: "p10",
        name: "Chinese Evergreen",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&auto=format&fit=crop",
      },
      {
        id: "p11",
        name: "Dracaena",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop",
      },
      {
        id: "p12",
        name: "Philodendron",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1616143617771-1451b5dfe67e?w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Succulents & Cacti",
    plants: [
      {
        id: "p13",
        name: "Echeveria",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop",
      },
      {
        id: "p14",
        name: "Barrel Cactus",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1529086360001-9a3f007c3f59?w=400&auto=format&fit=crop",
      },
      {
        id: "p15",
        name: "Jade Plant",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&auto=format&fit=crop",
      },
      {
        id: "p16",
        name: "Haworthia",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1524901548305-08eeddc35080?w=400&auto=format&fit=crop",
      },
      {
        id: "p17",
        name: "Prickly Pear",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1521334884684-d80222895322?w=400&auto=format&fit=crop",
      },
      {
        id: "p18",
        name: "String of Pearls",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&auto=format&fit=crop",
      },
    ],
  },
];

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(selectIsInCart(plant.id));

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <p className="plant-name">{plant.name}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-btn" onClick={handleAdd} disabled={inCart}>
        {inCart ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

function ProductList() {
  return (
    <>
      <Navbar />
      <div className="product-page">
        {categories.map((category) => (
          <div key={category.name} className="category-section">
            <h2 className="category-title">{category.name}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
