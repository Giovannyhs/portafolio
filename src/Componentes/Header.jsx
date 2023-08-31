import React from "react";
import "../Style/Header.css";

const Header = () => {
  return (
    <div>
      <img className="logo" src="imagenes/logo.svg" alt="" />
      <ul className="header">
        <li className="header_li">
          <a className="header_a" href="">
            <img className="iconos" src="imagenes/home.svg" alt="" />
            <span>INICIO</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="">
            <img className="iconos" src="imagenes/about.svg" alt="" />
            <span>SOBRE MI</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="">
            <img className="iconos" src="imagenes/tecnologias.svg" alt="" />
            <span>TECNOLOGIAS</span>
          </a>
        </li>
        <li className="header_li">
          <a className="header_a" href="">
            <img className="iconos" src="imagenes/proyectos.svg" alt="" />
            <span>PROYECTOS</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
