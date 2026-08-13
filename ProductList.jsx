import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.totalQuantity);

  // Example product data grouped into categories
  const categories = {
    "Indoor Plants": [
      { id: 1, name: "Snake Plant", price: 15, image: "/images/snake.jpg" },
      { id: 2, name: "Peace Lily", price: 20, image: "/images/peace.jpg" },
    ],
    "Outdoor Plants": [
      { id: 3, name: "Rose Bush", price: 25, image: "/images/rose.jpg" },
      { id: 4, name: "Hibiscus", price: 18, image: "/images/hibiscus.jpg" },
    ],
    "Succulents": [
      { id: 5, name: "Aloe Vera", price: 12, image: "/images/aloe.jpg" },
      { id: 6, name: "Echeveria", price: 10, image: "/images/echeveria.jpg" },
    ]
  };

  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons(prev => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: "#222", padding: "10px", color: "#fff" }}>
        <a href="index.html" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
        <a href="products.html" style={{ margin: "0 10px", color: "#fff" }}>Plants</a>
        <a href="cart.html" style={{ margin: "0 10px", color: "#fff" }}>
          Cart 🛒 ({cartCount})
        </a>
      </nav>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Our Plants</h1>

      {/* Categories */}
      {Object.keys(categories).map(category => (
        <div key={category} style={{ margin: "30px" }}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {categories[category].map(plant => (
              <div key={plant.id} style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                textAlign: "center"
              }}>
                <img src={plant.image} alt={plant.name} style={{ width: "100%", borderRadius: "8px" }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  disabled={disabledButtons[plant.id]}
                  onClick={() => handleAddToCart(plant)}
                  style={{
                    backgroundColor: disabledButtons[plant.id] ? "#aaa" : "#2e7d32",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: disabledButtons[plant.id] ? "not-allowed" : "pointer"
                  }}
                >
                  {disabledButtons[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
