import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/slider.module.css";
import AutoSlider from "../components/autoSlider";

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.topNote}>Every birthday is a gift. Every day is gift.</div>
            <h1>{'Love the giver more than the gift.'}</h1>
            <div className={styles.description}>
            Every gift from a friend is a wish for your happiness.
            </div>
            <button className={styles.btn}>Get started</button>
          </div>
          <AutoSlider/>
      </div>
      <Footer />
    </>
  );
};

export default Page;
