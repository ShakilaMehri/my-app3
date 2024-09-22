"use client";
import React from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "@chakra-ui/react";
import { CartItemType } from "../shop/shop";
import styles from "./cartItem.module.css";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className={styles.wrapper}>
    <div className={styles.image}>
        <img 
        src={item.imgUrl} 
        alt={item.name} 
        onError={(e) => {
          e.currentTarget.src = '/images/placeholder.png'; 
          e.currentTarget.alt = 'Image not available';
        }} 
      />
    </div>
    <div className={styles.content}>
      <h3>{item.name}</h3>
      <div className={styles.information}>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => {
          console.log('Removing from cart:', item.id);
          removeFromCart(item.id)
        }}>
          <MinusCircle />
        </Button>
        <p>{item.amount}</p>
        <Button onClick={() => {
          console.log('Adding to cart:', item);
          addToCart(item);
        }}>
          <PlusCircle />
        </Button>
      </div>
    </div>
  </div>
);

export default CartItem;
