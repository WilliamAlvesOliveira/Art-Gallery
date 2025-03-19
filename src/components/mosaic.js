import React, { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState(null);

  const breakpointColumns = {
    default: 4,
    768: 3,
    480: 3,
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="brasil">
       <h2 className='masonry'>Masonry Layout</h2>
       <p>Que tal fazermos um breve tour pela fauna e flora do brasil atraves de um Mansoty Layou?</p>
      <Masonry
        breakpointCols={breakpointColumns}
        className="mosaic-container"
        columnClassName="mosaic-column"
      >
        {images.map((image, index) => (
          <div className="mosaic-item" key={index}>
            <img
              src={image.src}
              alt={image.alt || `Imagem ${index + 1}`}
              onClick={() => openImage(image.src)}
              className="clickable-img"
            />
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Imagem ampliada" />
        </div>
      )}
    </section>
  );
};

export default Mosaic;
