import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  // Dedicated function to calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      if (item.quantity > 1) {
        // Remove one unit by decrementing quantity
        dispatch(removeFromCart(id));
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        for (let i = 0; i < updatedItem.quantity; i++) {
          dispatch(addToCart({
            id: updatedItem.id,
            name: updatedItem.name,
            price: updatedItem.price,
            image: updatedItem.image
          }));
        }
      } else {
        // If quantity is 1, remove item completely
        dispatch(removeFromCart(id));
      }
    }
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: "#222", padding: "10px", color: "#fff" }}>
        <a href="index.html" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
        <a href="products.html" style={{ margin: "0 10px", color: "#fff" }}>Plants</a>
        <a href="cart.html" style={{ margin: "0 10px", color: "#fff" }}>Cart</a>
      </nav>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #ccc",
              padding: "10px 0"
            }}>
              <img src={item.image} alt={item.name} style={{ width: "80px", borderRadius: "8px" }} />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
              <div>
                <button onClick={() => handleIncrease(item)} style={{ margin: "0 5px" }}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecrease(item.id)} style={{ margin: "0 5px" }}>-</button>
              </div>
              <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px", backgroundColor: "#c62828", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "4px" }}>
                Delete
              </button>
            </div>
          ))}

          {/* Use dedicated function for total */}
          <h2 style={{ textAlign: "right", marginTop: "20px" }}>
            Total Amount: ${calculateTotalAmount()}
          </h2>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
            <button onClick={() => alert("Checkout Coming Soon")} style={{ backgroundColor: "#2e7d32", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px" }}>
              Checkout
            </button>
            <a href="products.html" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "#444", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px" }}>
                Continue Shopping
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
