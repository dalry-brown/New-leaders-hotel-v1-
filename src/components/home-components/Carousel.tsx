import React, { useState } from 'react';
import styles from '../../styles/component-styles/home-components/carousel.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  return (
    <div className={styles.carousel}>
      <button className={styles.button} onClick={handlePrev}>‹</button>
      <div className={styles.carouselImages}>
        <div className={`${styles.carouselImageSide} ${styles.left}`}>
          <img src={images[leftIndex]} alt="Left" />
        </div>
        <div className={`${styles.carouselImageMiddle} ${styles.center}`}>
          <img src={images[currentIndex]} alt="Center" />
        </div>
        <div className={`${styles.carouselImageSide} ${styles.right}`}>
          <img src={images[rightIndex]} alt="Right" />
        </div>
      </div>
      <button className={styles.button} onClick={handleNext}>›</button>
    </div>
  );
};

export default Carousel;
