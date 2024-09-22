import React from "react";
import Header from "./components/header";
import  SideBar  from "./components/sidebar";
import { GlobalStyle } from "./sidebar/sidebar";
import MainSection from "./components/mainsection";
import Category from "./components/category";
import Feature from "./components/feature";
import TopNavBar from "./components/topnavbar";
import Product from "./components/product";
import Footer from "./components/footer";

export default function Home() {
  return (
   <main>
    <TopNavBar/>
    <SideBar/>
    <GlobalStyle/>
    <Header/>
    <MainSection/>
    <Category/>
    <Feature/>
    <Product/>
    <Footer/>
   </main>
  );
}
