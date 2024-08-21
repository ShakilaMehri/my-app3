"use client";
import React from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "@chakra-ui/react";
import { CartItemType } from "../shop/shop";
import { Wrapper } from "../cart/cart.styles";

type Props = {
  item: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="image">
        <img 
        src={item.imgUrl} 
        alt={item.name} 
        onError={(e) => {
          e.currentTarget.src = '/images/placeholder.png'; 
          e.currentTarget.alt = 'Image not available';
        }} 
      />
    </div>
    <div className="content">
      <h3>{item.name}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button onClick={() => removeFromCart(item.id)}>
          <MinusCircle />
        </Button>
        <p>{item.amount}</p>
        <Button onClick={() => addToCart(item)}>
          <PlusCircle />
        </Button>
      </div>
    </div>
  </Wrapper>
);

export default CartItem;
