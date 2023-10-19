import React, { useEffect, useState } from "react";
import Card from "../Componentes/Card";
import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";
import "../Style/Proyectos.css";

function Proyectos() {
  const tarjetas = [
    {
      id: 1,
      imageUrl: "./Imagenes/proyecto-1.png",
      name: "Bancos de recursos",
      description:
        "Banco de recursos, es una pagina donde los estudiantes podran ver material de trabajo, ayudas y proyectos.",
      link1: "https://github.com/programateacademy/programate-coders-front",
      link2: "https://programate-coders-front.vercel.app/",
    },
    {
      id: 2,
      imageUrl: "./Imagenes/doom.png",
      name: "Wheel of Doom",
      description:
        "Wheel of Doo, es un juego donde prodras ingresar hasta 32 nombres de jugador y podras ir descartandolos uno a uno.",
      link1: "https://github.com/Juanpak12/Hide_in_the-world-B13",
      link2: "https://deploy-preview-16--wheel-of-doom-colombia.netlify.app/",
    },
    {
      id: 3,
      imageUrl: "./Imagenes/cripto.png",
      name: "Cripto-Monedas",
      description:
        "Cripto_Moneda, es una pagina donde podras ver el precio altual de cualquier divisa en tiempo real.",
      link1: "https://github.com/Giovannyhs/criptomoneda",
      link2: "https://criptomoneda-rho.vercel.app",
    },
    {
      id: 3,
      imageUrl: "./Imagenes/portafolio.svg",
      name: "Portafolio",
      description:
        "Portafolio, es una pagina donde pueden encontrar informacion sobre mi y ver los proyectos en los que é trabajado.",
      link1: "https://github.com/Giovannyhs/portafolio",
      link2: "https://portafolio-giovannyhs.vercel.app/",
    },
  ];
  return (
    <div className="Inicio_container">
      <Header />
      <Back />
      <Luna />

      <div className="inicio">
        <h2 className="saludo">PROYECTOS</h2>
      </div>
      <div className="tarjetas_1">
        {tarjetas.map((tarjeta) => (
          <Card key={tarjeta.id} {...tarjeta} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Proyectos;
