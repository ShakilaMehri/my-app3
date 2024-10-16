"use client"
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import styles from '../styles/autoSlider.module.css';

interface SliderItem  {
  id: number;
  topic: string;
  imgSrc: string;
}

const AutoSlider = () => {
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch('http://localhost:8000/sliderItems');
        const data = await response.json();
        console.log("Fetched slider data:", data);

        setSliderItems(data.sliderItems);
      } catch (error) {
        console.error('Error fetching slider items:', error);        
      }
    };
    fetchSliderData();
  }, []);

  useEffect(() => {
    console.log(sliderItems);
  }, [sliderItems]);

  console.log("Auto slider is rendering!", );
  
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive:[
          {
          breakpoint:1540,
          settings:{
            slidesToShow: 5,
          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow: 4,
          },
        },
        {
          breakpoint:600,
          settings:{
            slidesToShow: 3,
          },
        },
        {
          breakpoint:480,
          settings:{
            slidesToShow: 2,
          },
        },
      ],
      };
  return (
    <div className="slider-container">
      <div>testing AutoSlider</div>
      <Slider {...settings}>
    {sliderItems.length > 0 ? (
      sliderItems.map((item) => (
        <div key={item.id} className={styles.cardCover}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src="/images/gifts9.jfif" alt='gifts image'/>
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
      ))
    ) : (
      <p>Loading</p>
    )}
      </Slider>
    </div>
  );
};


export default AutoSlider;