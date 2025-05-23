import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./Pages/Inicio";
import Proyectos from "./Pages/Proyectos";
import Sobre from "./Pages/Sobre";
import Tecnologias from "./Pages/Tecnologias";

function App() {
  return (
    <Router basename="/portafolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Tecnologias" element={<Tecnologias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
