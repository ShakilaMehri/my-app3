"use client";

import React, { useState} from "react";
import {
  Container,
  Content,
  ClosedSideBar,
  OpenSideBar,
  SearchInput,
  SearchWrapper,
  SearchIcon,
} from "../sidebar/stiles";
import {
  BellIcon,
  SettingsIcon,
  ArrowRight,
  ArrowLeft,
  LogOutIcon,
  UserIcon,
  Search,
  ShoppingCartIcon,
} from "lucide-react";

import Cart from "../cart/page";
import { CartItemType } from "../shop/shop";

const  SideBar: React.FC =() => {
  const [sideBar, setSideBar] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const addToCart = (clickedItem: CartItemType) =>{
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
    }

  const removeFromCart = (id: number) => {
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
  }

  const  handleChangeSideBar = ()=> {
    setSideBar((prevState) => !prevState);
  };
  
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar}>
                <ArrowRight />
              </button>

              {/* Search Input */}
              <div className="search-section">
                <SearchIcon>
                  <Search />
                </SearchIcon>
              </div>

              {/* Links */}
              <ul>
                <a href="/" title="github">
                  <img src="../../../../images/icons8-github-24.png" />
                </a>
                <a href="/" title="telegram">
                  <img src="../../../../images/icons8-telegram-24.png" />
                </a>
                <a href="/" title="twitter">
                  <img src="../../../../images/icons8-twitter-24.png" />
                </a>
                <a href="/" title="linkedin">
                  <img src="../../../../images/icons8-linkedin-24.png" />
                </a>
              </ul>
            </nav>
            <div>
              {/* Icones  */}
              <ul>
                <a href="/cart" title="Cart">
                  <ShoppingCartIcon />
                </a>
                <a href="/" title="Notification">
                  <BellIcon />
                </a>
                <a href="/" title="setting">
                  <SettingsIcon />
                </a>
                <a href="/" title="logout">
                  <LogOutIcon />
                </a>
              </ul>

              <span>
                <UserIcon />
              </span>
            </div>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <ArrowLeft />
                  </button>
                </span>

                {/* search input */}
                <SearchWrapper>
                  <SearchInput type="text" placeholder="search..." />
                  <SearchIcon>
                    <Search />
                  </SearchIcon>
                </SearchWrapper>

                {/* social Icones */}
                <ul>
                  <a href="/" title="github">
                    <img src="../../../../images/icons8-github-24.png" />
                    <p>github</p>
                  </a>
                  <a href="/" title="telegram">
                    <img src="../../../../images/icons8-telegram-24.png" />
                    <p>telegram</p>
                  </a>
                  <a href="/" title="twitter">
                    <img src="../../../../images/icons8-twitter-24.png" />
                    <p>twitter</p>
                  </a>
                  <a href="/" title="linkedin">
                    <img src="../../../../images/icons8-linkedin-24.png" />
                    <p>linkedin</p>
                  </a>
                </ul>
              </nav>
              <div>
                {/* Icones  */}
                <ul>
                  <a href="/cart" title="Cart">
                    <ShoppingCartIcon />
                    <p>Cart</p>
                  </a>
                  <a href="/">
                    <BellIcon />
                    <p>Notification</p>
                  </a>
                  <a href="/">
                    <SettingsIcon />
                    <p>Setting</p>
                  </a>
                  <a href="/">
                    <LogOutIcon />
                    <p> Log Out</p>
                  </a>
                </ul>
                <span>
                  <UserIcon />
                  <p>users</p>
                </span>
              </div>
              <div>
                <Cart
                  cartItems= {cartItems}
                  addToCart= {addToCart}
                  removeFromCart ={removeFromCart}
                />
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}

export default SideBar;
