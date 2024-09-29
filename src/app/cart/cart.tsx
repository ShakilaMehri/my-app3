"use client";

import React, { useMemo, useState, useEffect } from "react";
import CartItem from "../cartItem/cartItem";
import SideBar from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import styles from "./cart.module.css";

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.amount * item.price, 0),
    [cartItems]
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.wrapper}>

      <SideBar/>
      <GlobalStyle/>

      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItemsContainer}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <h2 className={styles.totalPrice}>
            Total: ${totalPrice.toFixed(2)}
          </h2>
          <div className={styles.checkoutButtonWrapper}>
            <Link href="/checkout" className={styles.checkoutLinkButton}>
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.emptyCartContainer}>
        </div>
      )}
    </div>
  );
};

export default Cart;
