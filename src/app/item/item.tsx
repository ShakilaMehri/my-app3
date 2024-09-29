"use client";
import React from "react";
import { CartItemType } from "../shop/shop";
import styles from "./item.module.css";
import { useCart } from "../context/cartContext";

type Props = {
  item: CartItemType;
  cartItems?: CartItemType[];
};

const Item: React.FC<Props> = ({ item, cartItems }) => {
  const {addToCart, removeFromCart} = useCart();

  const isItemInCart = cartItems?.find (cartItem => cartItem.id === item.id) ?? null;
  const totalPrice = isItemInCart ? isItemInCart.amount * item.price : item.price;

  return (
    <div className={styles.wrapper}>
      <img className={styles.itemImage} src={item.imgUrl} alt={item.name} onError={(e) => e.currentTarget.src = "/images/placeholder.png"} />
      <div className={styles.items}>
          <h3>{item.name}</h3>
          <h4>${totalPrice}</h4>

        {isItemInCart ? (
          <div className={styles.cartControls}>
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <p>{isItemInCart.amount}</p>
            <button onClick={() => addToCart(item)} aria-label="Add item to cart">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(item)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Item;
