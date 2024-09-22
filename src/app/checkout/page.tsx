"use client"

import React from 'react';
import { useCart } from '../context/cartContext';

const CheckOut: React.FC = () => {
  const {cartItems} = useCart();
  return (
    <div>
        <h1>CheckOut</h1>
        <p>Your order has been placed!</p>
        <h2>Order Summary:</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} x {item.amount}</p>
          </div>
        ))}
    </div>
  );
};

export default CheckOut;