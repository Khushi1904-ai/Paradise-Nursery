import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.totalQuantity);

  // ✅ Expanded product data: at least 6 unique plants per category
  const categories = {
    "Indoor Plants": [
      { id: 1, name: "Snake Plant", price: 15, image: "/images/snake.jpg" },
      { id: 2, name: "Peace Lily", price: 20, image: "/images/peace.jpg" },
      { id: 3, name: "Spider Plant", price: 12, image: "/images/spider.jpg" },
      { id: 4, name: "ZZ Plant", price: 18, image: "/images/zz.jpg" },
      { id: 5, name: "Areca Palm", price: 25, image: "/images/areca.jpg" },
      { id: 6, name: "Pothos", price: 10, image: "/images/pothos.jpg" },
    ],
    "Outdoor Plants": [
      { id: 7, name: "Rose Bush", price: 25, image: "/images/rose.jpg" },
      { id: 8, name: "Hibiscus", price: 18, image: "/images/hibiscus.jpg" },
      { id: 9, name: "Bougainvillea", price: 22, image: "/images/bougainvillea.jpg" },
      { id: 10, name: "Jasmine", price: 15, image: "/images/jasmine.jpg" },
      { id: 11, name: "Marigold", price: 8, image: "/images/marigold.jpg" },
      { id: 12, name: "Sunflower", price: 12, image: "/images/sunflower.jpg" },
    ],
    "Succulents": [
      { id: 13, name: "Aloe Vera", price: 12, image: "/images/aloe.jpg" },
      { id: 14, name: "Echeveria", price: 10, image: "/images/echeveria.jpg" },
      { id: 15, name: "Jade Plant", price: 14, image: "/images/jade.jpg" },
      { id: 16, name: "Cactus", price: 9, image: "/images/cactus.jpg" },
      { id: 17, name: "Haworthia", price: 11, image: "/images/haworthia.jpg" },
      { id: 18, name: "Sedum", price: 13, image: "/images/sedum.jpg" },
    ]
  };

  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons(prev => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      {/* ✅ Consistent Navbar */}
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
