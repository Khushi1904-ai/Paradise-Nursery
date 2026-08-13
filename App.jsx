import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList'; // ✅ Import your ProductList component

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      {!showProductList ? (
        <>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />  {/* ✅ Display product list when button is clicked */}
      )}
    </div>
  );
}

export default App;
