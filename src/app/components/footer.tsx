"use client"
import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <h2>Olive & Avery</h2>
        </div>
        <div className={styles.footerContact}>
          <p>Email: contact@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy;All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
