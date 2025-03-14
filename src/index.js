import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carousel from './components/carousel';
import reportWebVitals from './reportWebVitals';

// Crie a root para o NavBar
const navRoot = ReactDOM.createRoot(document.getElementById('nav-root'));
navRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Crie a root para o Carrossel
const carrosselRoot = ReactDOM.createRoot(document.getElementById('carrossel-root'));
carrosselRoot.render(
  <Carousel/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
