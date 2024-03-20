import React, { useState } from 'react';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextImage = () => {
    setCurrentIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
  };

  return (
    <div>
      <img src={images[currentIndex].url} alt={images[currentIndex].description} />
      <p>{images[currentIndex].description}</p>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Gallery;