"use client";

import { useState } from "react";
import { useCart } from "../../../lib/CartContext";

export default function BookDetailClient({
  bookId,
  stock,
  title,
  author,
  price,
  image,
}: {
  bookId: number;
  stock: number;
  title: string;
  author: string;
  price: number;
  image: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ bookId, title, author, price, quantity, image });
    setShowModal(true);
  };

  return (
    <>
      <div className="purchase-section">
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <input type="number" value={quantity} readOnly />
          <button onClick={() => setQuantity(Math.min(stock, quantity + 1))}>
            +
          </button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>✓ Added to Cart</h3>
            <p>
              {quantity} x {title}
            </p>
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Continue Shopping</button>
              <a href="/store/cart" className="view-cart-btn">
                View Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
