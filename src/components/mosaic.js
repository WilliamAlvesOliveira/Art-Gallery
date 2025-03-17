import React from "react";
import Masonry from "react-masonry-css";
import "../styles/mosaic.css"; 

function importAll(r) {
    return r.keys().map((key) => ({
      src: r(key), 
      alt: key.replace("./", "").replace(/\.(png|jpg|jpeg)$/, ""),
    }));
  }
  
  const images = importAll(require.context("../assets/aquarela", false, /\.(png|jpe?g)$/));

const Mosaic = () => {
  const breakpointColumns = {
    default: 4, // 3 colunas para telas grandes
    768: 3, // 2 colunas para tablets
    480: 3, // 1 coluna para celulares
  };

  return (
    <section className="brasil">
        <Masonry
          breakpointCols={breakpointColumns}
          className="mosaic-container"
          columnClassName="mosaic-column"
        >
          {images.map((image, index) => (
            <div className="mosaic-item" key={index}>
              <img src={image.src} alt={image.alt || `Imagem ${index + 1}`} />
            </div>
          ))}
        </Masonry>
    </section>
  );
};

export default Mosaic;
