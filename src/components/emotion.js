import React, { useState, useEffect, useRef } from "react";
import emotionData from "../data/emotion.json";
import "../styles/emotion.css";

// Importa todas as imagens do diretório
const importImages = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((item) => {
    const key = item.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
    images[key] = requireContext(item);
  });
  return images;
};

const images = importImages(
  require.context("../assets/emotions", false, /\.(png|jpe?g|svg)$/)
);

// Hook para verificar se o card está visível na tela
const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return isVisible;
};

// Gera um alinhamento aleatório sem repetir o último
const getRandomPosition = (lastPosition) => {
  const positions = ["flex-start", "center", "flex-end"];
  let newPosition;
  do {
    newPosition = positions[Math.floor(Math.random() * positions.length)];
  } while (newPosition === lastPosition);
  return newPosition;
};

// Componente do card individual
const EmotionCard = ({ emotion, text, song, autor, position }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const bgImage = images[emotion.toLowerCase()];

  return (
    <div
      ref={ref}
      className={`emotioncard ${isVisible ? "visible" : "hidden"}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        alignSelf: position,
      }}
    >
      {isVisible && (
        <div className="poetry">
          {text.split("\n").map((line, index) => (
            <p key={index}>{line}</p> // Exibe o texto todo de uma vez
          ))}
        </div>
      )}

      {isVisible && (
        <div className="song-info">
          <p>
            <span className="song">{song}</span><br />
            <span className="songAuthor">- {autor}</span>
          </p>
        </div>
      )}
    </div>
  );
};

// Componente principal da galeria
const EmotionGallery = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let lastPosition = "";
    const newPositions = emotionData.map(() => {
      lastPosition = getRandomPosition(lastPosition);
      return lastPosition;
    });
    setPositions(newPositions);
  }, []); // Gera posições aleatórias apenas uma vez ao carregar

  return (
    <section className="emotion">
      {emotionData.map((item, index) => (
        <EmotionCard
          key={index}
          emotion={item.emotion}
          text={item.text}
          song={item.song}
          autor={item.autor}
          position={positions[index]} // Pega a posição aleatória gerada
        />
      ))}
    </section>
  );
};

export default EmotionGallery;
