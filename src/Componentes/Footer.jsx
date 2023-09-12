import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/guiovanihernandez";
  return (
    <ul id="footer">
      <li id="footer_li">
        <a
          id="footer_a"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="iconos"
            src="./Imagenes/linkedin.svg"
            width={30}
            height={30}
            alt=""
          />
          <span>Linkedin</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="#">
          <img id="iconos_1" src="./Imagenes/email.svg" alt="" />
          <span>Email</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="#">
          <img id="iconos_1" src="./Imagenes/torre.svg" alt="" />
          <span>Torre</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="#">
          <img id="iconos_1" src="./Imagenes/github.svg" alt="" />
          <span>GitHub</span>
        </a>
      </li>
      <li id="footer_li">
        <a id="footer_a" href="#">
          <img id="iconos_1" src="./Imagenes/whatsapp.svg" alt="" />
          <span>Whatsapp</span>
        </a>
      </li>
    </ul>
  );
};

export default Footer;
