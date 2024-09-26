"use client"

import React, { useState } from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
import Shop from "./shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Page = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header />
      <Welcome />
      <QueryClientProvider client={queryClient}>
            <Shop cartItems={cartItems} setCartItems={setCartItems}/>
        </QueryClientProvider>
      <Footer />
    </>
  );
};

export default Page;
