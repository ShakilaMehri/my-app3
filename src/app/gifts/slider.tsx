"use client"
import React, {useState, useEffect} from "react";
import sliderData from '../data/sliderItems.json';
import styles from "../styles/slider.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SliderItemData {
    id: number;
    imgSrc: string;
    author: string;
    title: string;
    topic: string;
    description: string;
}

const Slider: React.FC = () => {
    const sliderItems: SliderItemData[] = sliderData.sliderItems || [];
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const timeAutoNext = 7000;

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1+ sliderItems.length) % sliderItems.length);
    };

    useEffect(() => {
    const newAutoNextTimeOutId = setTimeout(next, timeAutoNext);
    return () => clearTimeout(newAutoNextTimeOutId);
    }, [currentIndex]);

    return (
      <div className={styles.carousel}>
      <div className={styles.list}>
          {sliderItems.length > 0 ? (
              sliderItems.map((item, index) => (
                  <div
                      key={item.id}
                      className={`${styles.item} ${index === currentIndex ? styles.active : ""}`}
                  >
                      <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
                      <div className={styles.content}>
                          <div className={styles.author}>{item.author}</div>
                          <div className={styles.title}>{item.title}</div>
                          <div className={styles.topic}>{item.topic}</div>
                          <div className={styles.description}>{item.description}</div>
                          <div className={styles.buttons}>
                              <button>SEE MORE</button>
                              <button>SUBSCRIBE</button>
                          </div>
                      </div>
                  </div>
              ))
          ) : (
              <p>No slider items available</p>
          )}
      </div>

      <div className={styles.thumbnail}>
        {sliderItems.map((item) =>(
        <div className={styles.item} key={item.id}>
          <img src={item.imgSrc}/>
          <div className={styles.content}>
            <div className={styles.title}>Name Slider</div>
            <div className={styles.description}>Description</div>
            </div>
          </div>
          ))}
        </div>

      <div className={styles.arrows}>
        <button className={styles.prev} onClick={prev}><ArrowLeft/></button>
        <button className={styles.next} onClick={next}><ArrowRight/></button>
      </div>

      <div className={styles.time}></div>
      </div>
    );
};

export default Slider;
