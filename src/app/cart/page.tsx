import React from "react";
import Cart from "./cart";
import SideBar from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";
import { CartProvider} from "../context/cartContext";

const Page = () => {
  return (
    <CartProvider>
      {/* <SideBar />
      <GlobalStyle /> */}
      <Cart/>
    </CartProvider>
  );
};

export default Page;
