import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="home-container">
      <div className="cart-container">
        <h1 className="cart-title">🛒 Shopping Cart</h1>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}


          <h3 className="cart-total">Total: ₹{total}</h3>
        </div>
      </div>
    </div >
  );
};

export default Cart;