"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Grid, Spinner} from "@chakra-ui/react";
import Item from "../item/item";
import { Wrapper} from "./shop.styles";
import SideBar from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl?: string;
  amount: number;
};

interface CartProps {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

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
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { isLoading, error, data: itemsData } = useQuery<CartItemType[], Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialData: [],
  });

  useEffect(() => {
    console.log("Cart Items have been updated:", cartItems);
  }, [cartItems]);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {      
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };
  
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
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
      </Grid>
    </Wrapper>
    </div>
  );
};

export default Shop;
