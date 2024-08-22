"use client";
import React from "react";
import CartItem from "../cartItem/cartItem";
import { CartItemType } from "../shop/shop";
import { Wrapper } from "./cart.styles";

type Props = {
  cartItems: CartItemType [];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};


const Cart: React.FC<Props>  = ({ cartItems = [] , addToCart, removeFromCart}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
  return(
    <Wrapper>
      <h2>shopping cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) =>(
            <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
              />
          ))}
          </div>
      ) : (
        <div>No items in cart</div>
      )}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};


export default Cart;
