import React, { useState } from 'react';
import styles from './imageCarousel.module.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevImage}>Prev</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
