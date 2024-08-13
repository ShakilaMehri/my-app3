import React from "react";
import styles from "../styles/category.module.css";

const Category = () => {
  const categories = ["New In", "Baby", "Lifestyles", "Gifts"];
  return (
    <section className={styles.category}>
      {categories.map((category) => (
        <div key={category} className={styles.categorySection}>
          <div className={styles.inFrame}>
          <h3>{category}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
