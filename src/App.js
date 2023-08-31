import React from "react";
import "./App.css";
import Inicio from "./Pages/Inicio";
import Proyectos from "./Pages/Proyectos";
import Sobre from "./Pages/Sobre";
import Tecnologias from "./Pages/Tecnologias";

function App() {
  const content = ReturnContent();
  return <div className="App">{content}</div>;
}

function ReturnContent() {
  const url = window.location.pathname;
  //console.log(url);
  switch (url) {
    case "/Sobre":
      return <Sobre />;
    case "/Proyectos":
      return <Proyectos />;
    case "/Tecnologias":
      return <Tecnologias />;
    default:
      return <Inicio />;
  }
}
export default App;
