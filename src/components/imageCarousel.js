import React, { useState, useEffect } from 'react';
import skateDragon from '../assets/imagens/skate-dragon.jpg';
import unicorn from '../assets/imagens/unicorn.jpg'
import surfGirafa from '../assets/imagens/surfgirafa.jpg';
import tiger from '../assets/imagens/tiger.jpg'
import '../styles/imageCarousel.css';
const ImageCarousel = () => {
    const images = [skateDragon, surfGirafa, unicorn, tiger];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Muda a imagem a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, [images.length]);

    return (
        <div className='carousel-slice'>
            <img src={images[currentIndex]} alt="Imagem Carrossel" className="carousel-image" />
        </div>
    );
};

export default ImageCarousel;