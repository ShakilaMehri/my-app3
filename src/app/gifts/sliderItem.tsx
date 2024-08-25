import React from 'react';
import sliderItem from '../data/sliderItems.json'
import styles from '../styles/slider.module.css';

interface SliderItemProps  {
    imgSrc: string;
    author: string;
    title: string;
    topic: string;
    description: string;
    isActive: boolean;
}



const SliderItem: React.FC<SliderItemProps> = ({imgSrc, author, title, topic,description, isActive }) => {
  return (
    <div className={`${styles.item} ${isActive ? styles.active: ""}`}>
        <img src={imgSrc} alt={title} />
        <div className={styles.content}>
            <div className={styles.author}>{author}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.topic}>{topic}</div>
            <div className={styles.sliderDes}>{description}</div>
            <div className={styles.buttons}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  );
};

export default SliderItem;