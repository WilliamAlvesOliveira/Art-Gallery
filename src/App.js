import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/carousel';


function App() {
    return (
      
        <div className="App"> 
          <NavBar />
          <main>
            <section id="sobre">
              <p>O projeto ART Gallery é uma iniciativa voltada para o desenvolvimento de uma página web interativa utilizando a biblioteca React. O objetivo principal é criar uma experiência visual envolvente e dinâmica, incorporando diversas técnicas modernas de exibição de imagens.</p>
            </section>
            <Carousel /> 
          </main> 
        </div> 
    );
} 

export default App;

