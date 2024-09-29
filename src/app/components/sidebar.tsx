"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Container,
  Content,
  ClosedSideBar,
  OpenSideBar,
  SearchInput,
  SearchWrapper,
  SearchIcon,
  CartIconWrapper,
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

import { useCart } from "../context/cartContext";
import Cart from "../cart/cart";
import Link from "next/link";

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { cartItems, addToCart, removeFromCart } = useCart();
  console.log("Cart items in SideBar:", cartItems);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChangeSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const toggleCartVisibility = () => {
    setCartVisible((prevVisible) => !prevVisible);
  };

  const getTotalItems = useMemo(
    () => cartItems.reduce((total, item) => total + item.amount, 0),
    [cartItems]
  );
  if (!isMounted) return null;

  return (
    <Container>
      {sideBar && (
        <aside onClick={handleChangeSideBar} className="sidebar-overlay" />
      )}
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar} aria-label="Open sideBar">
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
                <a href="https://github.com" title="github">
                  <img src="/images/icons8-github-24.png" alt="Github" />
                </a>
                <a href="https://telegram.org" title="telegram">
                  <img src="/images/icons8-telegram-24.png" alt="Telegram" />
                </a>
                <a href="https://twitter.com" title="twitter">
                  <img src="/images/icons8-twitter-24.png" alt="Twitter" />
                </a>
                <a href="https://linkedin.com" title="linkedin">
                  <img src="/images/icons8-linkedin-24.png" alt="Linkedin" />
                </a>
              </ul>
            </nav>
            <div>
              {/* Icones  */}
              <ul>
                <button onClick={toggleCartVisibility} title="Open Cart">
                  <Link href="/cart">
                    <CartIconWrapper>
                      <ShoppingCartIcon />
                      {getTotalItems > 0 && (
                        <span className="cart-badge">{getTotalItems}</span>
                      )}
                    </CartIconWrapper>
                  </Link>
                </button>
                <button title="Notification">
                  <BellIcon />
                </button>
                <button title="setting">
                  <SettingsIcon />
                </button>
                <button title="logout">
                  <LogOutIcon />
                </button>
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
                  <button
                    onClick={handleChangeSideBar}
                    aria-label="Close sideBar"
                  >
                    <ArrowLeft />
                  </button>
                </span>

                {/* search input */}
                <SearchWrapper>
                  <SearchInput
                    type="text"
                    placeholder="search..."
                    aria-label="Search"
                  />
                  <SearchIcon>
                    <Search />
                  </SearchIcon>
                </SearchWrapper>

                {/* social Icones */}
                <ul>
                  <a href="https://github.com" title="github">
                    <img src="/images/icons8-github-24.png" alt="Github" />
                    <p>Github</p>
                  </a>
                  <a href="https://telegram.org" title="telegram">
                    <img src="/images/icons8-telegram-24.png" alt="Telegram" />
                    <p>Telegram</p>
                  </a>
                  <a href="https://twitter.com" title="twitter">
                    <img src="/images/icons8-twitter-24.png" alt="Twitter" />
                    <p>Twitter</p>
                  </a>
                  <a href="https://linkedin.com" title="linkedin">
                    <img src="/images/icons8-linkedin-24.png" alt="Linkedin" />
                    <p>linkedIn</p>
                  </a>
                </ul>
              </nav>
              <div>
                {/* Icones  */}
                <ul>
                  <button onClick={toggleCartVisibility} title="Open Cart">
                    <Link href="/cart">
                      <CartIconWrapper>
                        <ShoppingCartIcon />
                        {getTotalItems > 0 && (
                          <span className="cart-badge">{getTotalItems}</span>
                        )}
                      </CartIconWrapper>
                    </Link>
                    <p>Cart</p>
                  </button>
                  <button title="Notification">
                    <BellIcon />
                    <p>Notification</p>
                  </button>
                  <button title="Setting">
                    <SettingsIcon />
                    <p>Setting</p>
                  </button>
                  <button title="Logout">
                    <LogOutIcon />
                    <p> Log Out</p>
                  </button>
                </ul>
                <span>
                  <UserIcon />
                  <p>users</p>
                </span>
              </div>
              <div>
                {cartVisible && (
                  <Cart
                    cartItems={cartItems}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                )}
              </div>
            </section>
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
};

export default SideBar;
