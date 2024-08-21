"use client";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Spinner,
  Grid,
  Badge,
  Box,
} from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import Item from "../item/item";
import Cart from "../cart/page";
import { Wrapper, StyledButton } from "./shop.styles";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount: number;
};

const getItems = async (): Promise<CartItemType[]> => {
  const response = await axios.get("http://localhost:8000/items");
  return response.data;
};

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { isLoading, error, data } = useQuery<CartItemType[], Error>(
    "items",
    getItems
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);

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
    <Wrapper>
      <Drawer
        placement="right"
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Your Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Box position="relative" display="inline-block">
          <ShoppingCart size={24} />
          {getTotalItems(cartItems) > 0 && (
            <Badge
              position="absolute"
              top="-10px"
              right="-10px"
              borderRadius="full"
              px={2}
              colorScheme="red"
            >
              {getTotalItems(cartItems)}
            </Badge>
          )}
        </Box>
      </StyledButton>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        {data?.map((item) => (
          <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Shop;
