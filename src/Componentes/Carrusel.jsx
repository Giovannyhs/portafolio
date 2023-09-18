import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Carrusel.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import pythonImg from "../Imagenes-1/python.svg";
import figmaImg from "../Imagenes-1/figma.svg";
import githubImg from "../Imagenes-1/github1.svg";
import htmlImg from "../Imagenes-1/html.svg";
import css3Img from "../Imagenes-1/css3.svg";
import jsImg from "../Imagenes-1/js.svg";
import reactImg from "../Imagenes-1/react.svg";

const Carrusel = () => {
  const tarjetasRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const tarjetas = tarjetasRef.current;

    const handleScroll = () => {
      setScrollPosition(tarjetas.scrollLeft);
    };

    tarjetas.addEventListener("scroll", handleScroll);

    return () => {
      tarjetas.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIconClick = (direction) => {
    const tarjetas = tarjetasRef.current;
    const firstImg = document.querySelector(".tarjetas img");
    const firstImgWidth = firstImg.clientWidth + 18;

    if (direction === "left") {
      tarjetas.scrollLeft -= firstImgWidth;
    } else {
      tarjetas.scrollLeft += firstImgWidth;
    }
  };

  return (
    <div className="carrusel">
      {scrollPosition > 0 && (
        <FontAwesomeIcon
          className="i"
          id="left"
          icon={faChevronLeft}
          onClick={() => handleIconClick("left")}
        />
      )}
      <div className="tarjetas" ref={tarjetasRef}>
        <img src={pythonImg} alt="img" draggable="false" />
        <img src={figmaImg} alt="img" draggable="false" />
        <img src={githubImg} alt="img" draggable="false" />
        <img src={htmlImg} alt="img" draggable="false" />
        <img src={css3Img} alt="img" draggable="false" />
        <img src={jsImg} alt="img" draggable="false" />
        <img src={reactImg} alt="img" draggable="false" />
      </div>
      <FontAwesomeIcon
        className="i"
        id="right"
        icon={faChevronRight}
        onClick={() => handleIconClick("right")}
      />
    </div>
  );
};

export default Carrusel;
