import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";
import "../Style/Sobre.css";

function Sobre() {
  return (
    <div className="Inicio_container">
      <Header />
      <Back />
      <Luna />

      <div className="inicio">
        <h2 className="saludo">SOBRE Mi</h2>
        <p className="sobre_mi">
          Soy un desarrollador Web Frontend, con experiencia en creación de
          proyectos utilizando la metodología SCRUM, mi pasión por la
          tecnología, me ha permitido obtener experiencia en desarrollo de
          soluciones con interfaces funcionales, contando con una buena
          experiencia para el usuario y buen rendimiento de las plataformas web.
          También cuento con habilidades de liderazgo, comunicación asertiva y
          escucha activa que me permiten trabajar en equipo de manera ágil y
          eficaz aumentando la productividad y el crecimiento colectivo.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
