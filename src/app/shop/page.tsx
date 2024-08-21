"use client";
import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import { SideBar } from "../components/sidebar";
import { GlobalStyle } from "../sidebar/sidebar";
import Footer from "../components/footer";
import Shop from "./shop";

const Page = () => {
  return (
    <>
      <Header />
      <Welcome />
      <SideBar />
      <Shop />
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default Page;
