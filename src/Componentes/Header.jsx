import React from "react";
import "../Style/Header.css";

const Header = () => {
  return (
    <div>
      <img className="logo" src="./Imagenes/logo.svg" alt="" />
      <ul className="header">
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
