import React, { useState } from "react";
import "../Style/Carrusel.css";

import pythonImg from "../Imagenes-1/python.svg";
import figmaImg from "../Imagenes-1/figma.svg";
import githubImg from "../Imagenes-1/github1.svg";
import htmlImg from "../Imagenes-1/html.svg";
import css3Img from "../Imagenes-1/css3.svg";
import jsImg from "../Imagenes-1/js.svg";
import reactImg from "../Imagenes-1/react.svg";

const Carrusel = () => {
  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const showHideIcons = () => {
    const tarjetas = document.querySelector(".tarjetas");
    const arrowIcons = document.querySelectorAll(".carrusel i");
    const scrollWidth = tarjetas.scrollWidth - tarjetas.clientWidth;
    arrowIcons[0].style.display = tarjetas.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display =
      tarjetas.scrollLeft === scrollWidth ? "none" : "block";
  };

  const handleIconClick = (e) => {
    const tarjetas = document.querySelector(".tarjetas");
    const firstImg = document.querySelector(".tarjetas img");
    const firstImgWidth = firstImg.clientWidth + 18;
    tarjetas.scrollLeft +=
      e.target.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  };

  const autoSlide = () => {
    const tarjetas = document.querySelector(".tarjetas");
    const firstImg = document.querySelector(".tarjetas img");
    const firstImgWidth = firstImg.clientWidth + 18;

    if (tarjetas.scrollLeft === tarjetas.scrollWidth - tarjetas.clientWidth)
      return;
    const valDifference = firstImgWidth - Math.abs(positionDiff);

    if (tarjetas.scrollLeft > prevScrollLeft) {
      return (tarjetas.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
    }
    tarjetas.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(tarjetas.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    setIsDragging(true);
    const tarjetas = document.querySelector(".tarjetas");
    tarjetas.classList.add("dragging");
    setPositionDiff((e.pageX || e.touches[0].pageX) - prevPageX);
    tarjetas.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    setIsDragStart(false);
    const tarjetas = document.querySelector(".tarjetas");
    tarjetas.classList.remove("dragging");

    if (!isDragging) return;
    setIsDragging(false);
    autoSlide();
  };

  const tarjetas = document.querySelector(".tarjetas");

  return (
    <div className="carrusel">
      <i
        id="left"
        className="fa-solid fa-angle-left"
        onClick={handleIconClick}
      ></i>
      <div className="tarjetas">
        <img src={pythonImg} alt="img" draggable="false" />
        <img src={figmaImg} alt="img" draggable="false" />
        <img src={githubImg} alt="img" draggable="false" />
        <img src={htmlImg} alt="img" draggable="false" />
        <img src={css3Img} alt="img" draggable="false" />
        <img src={jsImg} alt="img" draggable="false" />
        <img src={reactImg} alt="img" draggable="false" />
      </div>
      <i
        id="right"
        className="fa-solid fa-angle-right"
        onClick={handleIconClick}
      ></i>
    </div>
  );
};

export default Carrusel;
