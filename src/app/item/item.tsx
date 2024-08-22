"use client"
import React from "react";
import { Button } from "@chakra-ui/react";
import { CartItemType } from "../shop/shop";
import { Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.imgUrl} alt={item.name} />
    <div>
      <div>
        <h3>{item.name}</h3>
        <h4>${item.price}</h4>
      </div>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </div>
  </Wrapper>
);

export default Item;
