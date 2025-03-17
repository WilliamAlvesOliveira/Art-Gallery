import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/carousel';
import Mosaic from"./components/mosaic";


function App() {
    return (
        <div className="App"> 
          <NavBar />
          <main>
            <section id="sobre">
              <p>O projeto ART Gallery é uma iniciativa voltada para o desenvolvimento de uma página web interativa utilizando a biblioteca React. O objetivo principal é criar uma experiência visual envolvente e dinâmica, incorporando diversas técnicas modernas de exibição de imagens.</p>
            </section>
            <Carousel /> 
            <h2 className='masonry'>Masonry Layout</h2>
            <p>Que tal fazermos um breve tour pela fauna e flora do brasil atraves de um Mansoty Layou?</p>
            <Mosaic/>
          </main> 
        </div> 
    );
} 

export default App;

