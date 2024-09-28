"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CartItemType } from "../shop/shop";

interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () =>{},
  removeFromCart:() => {},
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cart");
      try {
        return storedCartItems ? JSON.parse(storedCartItems) : [];
      } catch (error) {
        console.error("Error parsing stored cart items:", error);
        return[];
      }
    }
    return[];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cart");
      console.log("Stored cart items on mount:", storedCartItems);
      try {
        setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
      } catch (error) {
        console.log("Error parsing stored cart items:", error);
        setCartItems([]);
      }
    }
  }, []);

  const addToCart = (item: CartItemType) => {
    console.log("Adding to cart:", item);
    setCartItems((prev) => {
      const isItemInCart = prev.find((cartItem) => cartItem.id === item.id);
      const updateCart = isItemInCart 
      ? prev.map((cartItem) => 
        cartItem.id === item.id
      ? {...cartItem, amount: cartItem.amount + 1}
      : cartItem
      )
      : [...prev, {...item, amount: 1}];

      localStorage.setItem("cart", JSON.stringify(updateCart));
      return updateCart;
    });
  };

  useEffect(() => {
    console.log("cart Items have been updated:", cartItems);    
  }, [cartItems]);

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        }
        return [...acc, item];
      }, [] as CartItemType[])
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
