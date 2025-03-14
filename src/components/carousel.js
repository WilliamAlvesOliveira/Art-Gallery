import React from "react";
import CarouselText from './CarrosselText';
import ImageCarousel from './imageCarousel';
import '../styles/Carrossel.css';

const Carousel = () => {
    return (
      <section id="carrossel">
        <CarouselText />
        <ImageCarousel />
      </section>
    );
  };
  
export default Carousel;