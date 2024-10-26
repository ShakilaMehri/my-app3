"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import styles from "../styles/autoSlider.module.css";

interface SliderItem {
  id: number;
  topic: string;
  imgSrc: string;
}

const AutoSlider = () => {
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://localhost:8000/sliderItems");
        const data = await response.json();
        console.log("Fetched slider data:", data);

        setSliderItems(data.sliderItems);
      } catch (error) {
        console.error("Error fetching slider items:", error);
      }
    };
    fetchSliderData();
  }, []);

  useEffect(() => {
    console.log(sliderItems);
  }, [sliderItems]);

  console.log("Auto slider is rendering!");

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={6}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          1540: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        }}
      >
        {sliderItems.length > 0 ? (
          sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.cardCover}>
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img src={item.imgSrc} alt={item.topic}/>
                  </div>
                  <div className={styles.details}>
                    <div>{item.topic}</div>
                    <div>Designer</div>
                    <div className={styles.chips}>
                      <div className={styles.chip}>Animation</div>
                      <div className={styles.chip}>UC</div>
                      <div className={styles.chip}>Visuals</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading</p>
        )}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
