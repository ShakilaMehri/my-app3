"use client"

import React from 'react';
import { useCart } from '../context/cartContext';
import styles from "../styles/checkout.module.css";

const CheckOut: React.FC = () => {
  const {cartItems} = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );
  return (
    <div className={styles.checkoutContainer}>
        <h1 className={styles.checkoutHeader}>CheckOut</h1>
        {cartItems.length > 0 ? (
          <>
          <p>Your order has been placed!</p>
          <div className={styles.orderSummary}>
            <h2>Order Summary:</h2>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <img src={item.imgUrl} alt={item.name} />
                <div className={styles.itemDetails}>
                <p>{item.name} x {item.amount}</p>
                </div>
                <p>${(item.amount * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className={styles.totalPrice}>
            Total: ${totalPrice.toFixed(2)}
          </div>
          </>
        ) : (
          <p className={styles.emptyCartMessage}>Your cart is empty!</p>
        )}
    </div>
  );
};

export default CheckOut;