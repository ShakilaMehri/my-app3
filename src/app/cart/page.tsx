import React from "react";
import Cart from "./cart";
import { CartProvider} from "../context/cartContext";

const Page = () => {
  return (
    <CartProvider>
      <Cart/>
    </CartProvider>
  );
};

export default Page;
