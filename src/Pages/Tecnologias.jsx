import Luna from "../Componentes/Luna3D";
import Back from "../Componentes/Back";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../Style/Inicio.css";

function Tecnologias() {
  return (
    <div className="Inicio_container">
      <Header />
      <Back />
      <Luna />
      <Footer />

      <div className="inicio">
        <h2 className="saludo">TECNOLOGIAS</h2>
      </div>
    </div>
  );
}

export default Tecnologias;
