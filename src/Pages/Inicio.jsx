import React from "react";
import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

function Inicio() {
  return (
    <div className="Inicio_container">
      <div className="inicio">
        <Header />
        <Footer />
        <Back />
        <Luna />

        <h2>hola</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero
          perspiciatis non temporibus aliquid sequi beatae molestias, a dolorum
          nisi id, iste repudiandae porro alias quisquam? Fugit, iusto facilis.
          Odit.
        </p>
      </div>
    </div>
  );
}

export default Inicio;
