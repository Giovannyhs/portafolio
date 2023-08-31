import React from "react";
import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";

function Proyectos() {
  return (
    <div className="Inicio_container">
      <Header />
      <Back />
      <Luna />
      <Footer />

      <div className="inicio">
        <h2 className="saludo">PROYECTOS</h2>
      </div>
    </div>
  );
}

export default Proyectos;
