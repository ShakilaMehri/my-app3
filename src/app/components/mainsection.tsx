import React from 'react';
import styles from '../styles/mainsection.module.css';

const MainSection = () => {
  return (
    <section className={styles.main}>
        <div className={styles.mainContent}>
            <h2>New Collection</h2>
            <h1>Shop our</h1>
            <span>Babywear</span>
        </div>
        <button className={styles.mainBtn}>Shop Now</button>
        <div className={styles.mainImg}>
            <img src="../../../images/download (5).jfif" alt="baby dress" />
        </div>
    </section>
  );
}

export default MainSection;