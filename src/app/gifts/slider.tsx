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
    const [autoNextTimeOutId, setAutoNextTimeOutId] = useState<NodeJS.Timeout | null>(null);

    const timeAutoNext = 7000;

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1+ sliderItems.length) % sliderItems.length);
    };

    const resetTimeouts = () => {
        if (autoNextTimeOutId) clearTimeout(autoNextTimeOutId);
    };

    useEffect(() => {
        resetTimeouts();

    const newAutoNextTimeOutId = setTimeout(next, timeAutoNext);
    setAutoNextTimeOutId(newAutoNextTimeOutId);

    return () => resetTimeouts();
    }, [currentIndex]);

    return (
    <div className={styles.carousel} >
      <div className={styles.list} >
        {sliderItems.length > 0 ? (
      sliderItems.map((item, index) =>(
                <div 
                key={index}
                imgSrc={item.imgSrc}
                author={item.author}
                title={item.title}
                topic={item.topic}
                description={item.description}
                isActive={index === currentIndex}
            />
      ))
        ) : (
            <p>No sliderItem available</p>
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
