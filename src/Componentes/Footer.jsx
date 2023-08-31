import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <ul id="footer">
      <li id="footer_li">
        <a id="footer_a" href="">
          <img
            id="iconos"
            src="imagenes/linkedin.svg"
            width={30}
            height={30}
            alt=""
          />
          <span>Linkedin</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="">
          <img id="iconos_1" src="imagenes/email.svg" alt="" />
          <span>Email</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="">
          <img id="iconos_1" src="imagenes/torre.svg" alt="" />
          <span>Torre</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="">
          <img id="iconos_1" src="imagenes/github.svg" alt="" />
          <span>GitHub</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="">
          <img id="iconos_1" src="imagenes/whatsapp.svg" alt="" />
          <span>Whatsapp</span>
        </a>
      </li>
    </ul>
  );
};

export default Footer;
