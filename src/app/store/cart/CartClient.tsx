"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../lib/CartContext";

export default function CartClient() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ marginTop: "16px", color: "#666" }}>
          Start adding Christian books to your cart!
        </p>
        <Link href="/store/books" className="view-all" style={{ marginTop: "24px" }}>
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-content">
      <h2>Shopping Cart ({items.length} items)</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.bookId} className="cart-item">
            <Image src={item.image} alt={item.title} width={80} height={120} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="author">{item.author}</p>
              <p className="price">₹{item.price}</p>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-selector">
                <button onClick={() => updateQuantity(item.bookId, Math.max(1, item.quantity - 1))}>
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => updateQuantity(item.bookId, item.quantity + 1)}>
                  +
                </button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.bookId)}>
                Remove
              </button>
            </div>
            <div className="cart-item-total">
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
