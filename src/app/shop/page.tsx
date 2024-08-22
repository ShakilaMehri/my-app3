"use client"
import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import SideBar from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";
import Footer from "../components/footer";
import Shop from "./shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <>
      <Header />
      <Welcome />
      <SideBar />
      <QueryClientProvider client={queryClient}>
            <Shop/>
        </QueryClientProvider>
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default Page;
