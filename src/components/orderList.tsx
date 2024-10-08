"use client";

import React from 'react';
import { useCart } from '@/context/CartContext'; // Import the Cart context

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart

  // Calculate subtotal, discount, and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 1200; // Example discount
  const total = subtotal - discount;

  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-lg font-bold mb-4">Cart</h1>

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-3 bg-orange-100 rounded-lg p-3">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              {/* Display the price multiplied by the quantity correctly */}
              <p className="font-bold">₦{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-red-500 ml-4"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        {/* Promo Code */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your promo code"
          />
          <button className="w-full bg-orange-500 text-white py-2 mt-2 rounded-lg">
            Apply
          </button>
        </div>

        {/* Subtotal, Discount, and Total */}
        <div className="text-right space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">₦{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="font-semibold text-green-600">₦{discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-bold">₦{total}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg mb-2">
            Proceed to Checkout
          </button>
          <button className="w-full bg-gray-100 text-orange-500 py-3 rounded-lg">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
