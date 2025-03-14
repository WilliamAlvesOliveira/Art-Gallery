import React from 'react';
import NavButton from './NavButton';
import carouselIcon from '../assets/imagens/carousel-icon.png';
import '../styles/NavBar.css';

const navItems = [
    { icon: carouselIcon, text: 'Carrossel' },
    // Adicione mais itens de navegação conforme necessário
];

const NavBar = () => {
    return (
        <nav className="nav-bar">
            {navItems.map((item, index) => (
                <NavButton key={index} icon={item.icon} text={item.text} />
            ))}
        </nav>
    );
};

export default NavBar;