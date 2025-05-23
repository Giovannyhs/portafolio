import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const imagePath = (filename) =>
    `${process.env.PUBLIC_URL}/Imagenes/${filename}`;

  return (
    <div>
      <img className="logo" src={imagePath("logo.svg")} alt="Logo" />
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
          <Link className="header_a" to="/">
            <img className="iconos" src={imagePath("home.svg")} alt="Inicio" />
            <span>INICIO</span>
          </Link>
        </li>
        <li className="header_li">
          <Link className="header_a" to="/Sobre">
            <img
              className="iconos"
              src={imagePath("about.svg")}
              alt="Sobre mí"
            />
            <span>SOBRE MI</span>
          </Link>
        </li>
        <li className="header_li">
          <Link className="header_a" to="/Tecnologias">
            <img
              className="iconos"
              src={imagePath("tecnologias.svg")}
              alt="Tecnologías"
            />
            <span>TECNOLOGIAS</span>
          </Link>
        </li>
        <li className="header_li">
          <Link className="header_a" to="/Proyectos">
            <img
              className="iconos"
              src={imagePath("proyectos.svg")}
              alt="Proyectos"
            />
            <span>PROYECTOS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
