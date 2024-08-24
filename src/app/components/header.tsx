import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.login}>
        <Link href='/login'>Log In</Link>
      </div>
      <div className={styles.logo}>
        <h1>Olive & Avery</h1>
        <p>Lifestyle Boutique</p>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/gifts">Gifts</Link>
          </li>
          <li>
            <Link href="#">Baby</Link>
          </li>
          <li>
            <Link href="#">Lifestyle</Link>
          </li>
          <li>
            <Link href="#">Brands</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/fetch">Fetch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
