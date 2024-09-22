"use client";
import React from "react";
import { CartItemType } from "../shop/shop";
import styles from "./item.module.css";

type Props = {
  item: CartItemType;
  cartItems?: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ item, cartItems, handleAddToCart, handleRemoveFromCart }) => {
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
            <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
            <p>{isItemInCart.amount}</p>
            <button onClick={() => handleAddToCart(item)}>+</button>
          </div>
        ) : (
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Item;
