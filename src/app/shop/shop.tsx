"use client"

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Grid, Spinner} from "@chakra-ui/react";
import Item from "../item/item";
import { Wrapper} from "./shop.styles";
import SideBar from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";
import { useCart } from "../context/cartContext";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl?: string;
  amount: number;
};

const fetchItems = async (): Promise<CartItemType[]> => {
  try {
    const response = await axios.get("http://localhost:8000/items");
    const data = response.data;
    if (data && Array.isArray(data.items)) {
      console.log("API response:", response.data);
      return data.items;
    } else {
      console.error("invalid API response:", data);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return[];
  }
};

const Shop = () => {
  const {cartItems, addToCart, removeFromCart} = useCart();
  const { isLoading, error, data: itemsData } = useQuery<CartItemType[], Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialData: [],
  });
  
  if (isLoading) return <Spinner />;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <SideBar cartItems={cartItems}/>
      <GlobalStyle/>
    <Wrapper>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {Array.isArray(itemsData) &&
            itemsData.map((item) => (
              <Item
                key={item.id}
                item={item}
                cartItems={cartItems}
                handleAddToCart={addToCart}
                handleRemoveFromCart={removeFromCart}
              />
            ))}
      </Grid>
    </Wrapper>
    </div>
  );
};

export default Shop;
