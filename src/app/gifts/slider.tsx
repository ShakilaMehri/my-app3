"use client";
import React, { useState, useEffect } from "react";
import sliderItem from "../data/sliderItems.json";
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
  const [sliderItems, setSliderItems] = useState<SliderItemData[]>(
    sliderItem.sliderItems || []
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeAutoNext = 7000;

  const next = () => {
    setCurrentIndex((prevIndex) => {
        console.log("Next clicked", prevIndex + 1);
        return (prevIndex + 1) % sliderItems.length;
    })
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
        console.log('prev clicked', (prevIndex - 1 + sliderItems.length) % sliderItems.length );
        return (prevIndex - 1 + sliderItems.length) % sliderItems.length;
    })
  };

  useEffect(() => {
    const intervalId = setInterval(next, timeAutoNext);
    return () => clearInterval(intervalId);
  }, [sliderItems.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.list}>
        {sliderItems.length > 0 ? (
          sliderItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${
              index === currentIndex ? styles.active : ""
              }`}
            >
              <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
              <div className={styles.content}>
                <div className={styles.author}>{item.author}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.topic}>{item.topic}</div>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.buttons}>
                  <button>SEE MORE</button>
                  <button> SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No slider items available</p>
        )}
      </div>

      <div className={styles.thumbnail}>
        {sliderItems.length > 0 ? (
          sliderItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${
                index === currentIndex ? styles.activeThumbnail : ""
              }`}
            >
              <img src={item.imgSrc} alt={item.title} />
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No thumbnails available</p>
        )}
      </div>

      <div className={styles.arrows}>
        <button
          className={styles.prev}
          onClick={prev}
          aria-label="Previous slide"
        >
          <ArrowLeft />
        </button>
        <button 
          className={styles.next}
          onClick={next}
          aria-label="Next slide">
          <ArrowRight />
        </button>
      </div>
      <div className={styles.time}></div>
    </div>
  );
};

export default Slider;
