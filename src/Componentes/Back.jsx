import React from "react";
import "../Style/Back.css";

function Back() {
  const starCount = 50; // Ajusta el número de estrellas

  const stars = Array.from({ length: starCount }).map((_, index) => (
    <div className="star" key={index}></div>
  ));

  return <div className="stars">{stars}</div>;
}

export default Back;
