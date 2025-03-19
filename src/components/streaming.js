import React, { useState } from 'react';
import '../styles/streaming.css';
import Characters from '../data/characters.json';

// Função para importar imagens dinamicamente
const importImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((item) => {
        const key = item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
        images[key] = requireContext(item);
    });
    return images;
};

// Carregar todas as imagens da pasta "streaming"
const images = importImages(require.context('../assets/streaming', false, /\.(png|jpe?g|svg)$/));

const Streaming = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    // Obter informações do personagem selecionado
    const selectedCharacter = selectedCard ? Characters.find(character => character.name === selectedCard) : null;
    const currentBackground = selectedCharacter
        ? images[`${selectedCharacter.name.toLowerCase()}back`]
        : images["defaultbackground"];

    return (
        <section id="streaming">
            <h2>Streaming Cards</h2>
            {/* Poster com fundo dinâmico */}
            <div id="poster" style={{
                backgroundImage: `url(${currentBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top'
            }}>
                {selectedCharacter && (
                    <div className="character-info">
                        <h3>{selectedCharacter.titulo}</h3>
                        <p>{selectedCharacter.text}</p>
                    </div>
                )}
            </div>

            {/* Cards dos personagens */}
            <div id="cards">
                {Characters.map((character, index) => {
                    const frontImage = images[`${character.name.toLowerCase()}front`];

                    return (
                        <div key={index} className="card" onClick={() => setSelectedCard(character.name)}>
                            <h3>{character.titulo}</h3>
                            <img src={frontImage} alt={`Card de ${character.titulo}`} />
                            <p>{character.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Streaming;
