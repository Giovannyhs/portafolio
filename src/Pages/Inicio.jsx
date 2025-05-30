import React from "react";
import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";

function Inicio() {
  const imagePath = (filename) =>
    `${process.env.PUBLIC_URL}/Imagenes/${filename}`;

  return (
    <div
      className="Inicio_container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Header />
      <Back />
      <Luna />

      <div className="inicio">
        <img
          className="foto"
          src={imagePath("foto.jpg")}
          alt="Foto de Guiovani"
        />
        <h2 className="saludo_1">
          HOLA, SOY GUIOVANI HERNANDEZ <br />
          DESARROLLADOR FRONTEND
        </h2>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
