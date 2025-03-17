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
    default: 4, // 4 colunas para telas grandes
    768: 3, // 3 colunas para tablets
    480: 3, // 2 colunas para celulares
  };

  const openImage = (image) => {
    setSelectedImage(image); // Define a imagem selecionada
  };

  const closeModal = () => {
    setSelectedImage(null); // Fecha o modal
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
            <img
              src={image.src}
              alt={image.alt || `Imagem ${index + 1}`}
              onClick={() => openImage(image.src)} // Abre a imagem ao clicar
              className="clickable-img"
            />
          </div>
        ))}
      </Masonry>

      {/* Modal */}
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
