import React, { useState } from "react";
import "../Style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img className="logo" src="./Imagenes/logo.svg" alt="" />
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`header ${isOpen ? "open" : ""}`}>
        <li className="header_li">
          <a className="header_a" href="/Inicio">
            <img className="iconos" src="./Imagenes/home.svg" alt="" />
            <span>INICIO</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="/Sobre">
            <img className="iconos" src="./Imagenes/about.svg" alt="" />
            <span>SOBRE MI</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="/Tecnologias">
            <img className="iconos" src="./Imagenes/tecnologias.svg" alt="" />
            <span>TECNOLOGIAS</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="/Proyectos">
            <img className="iconos" src="./Imagenes/proyectos.svg" alt="" />
            <span>PROYECTOS</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
