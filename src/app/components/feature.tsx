"use client"
import React from "react";
import styles from "../styles/feature.module.css";

const Feature = () => {
  return (
    <section className={styles.feature}>
      <div className={styles.featureSection}>
      <h2>Find the</h2>
      <span>perfect Gifts</span>
      <p>To celebrate a special moment</p>
      </div>
      <div className={styles.featureImg}>
      <img src="../../../images/bascket.jfif" alt="gifts" />
      </div>
    </section>
  );
};

export default Feature;
