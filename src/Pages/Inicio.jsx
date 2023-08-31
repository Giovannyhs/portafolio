import React from "react";
import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";

function Inicio() {
  return (
    <div className="Inicio_container">
      <Header />
      <Back />
      <Luna />
      <Footer />

      <div className="inicio">
        <img className="foto" src="./Imagenes/foto.png" alt="" />
        <h2 className="saludo">
          HOLA, SOY GUIOVANI HERNANDEZ <br />
          DESARROLLADOR FRONTEND
        </h2>
      </div>
    </div>
  );
}

export default Inicio;
