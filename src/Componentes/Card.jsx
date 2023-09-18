import React from "react";
import PropTypes from "prop-types";
import "../Style/Card.css";

const Card = ({ imageUrl, name, description, link1, link2 }) => {
  return (
    <div className="card">
      <img className="imagenes" src={imageUrl} alt={name} />
      <h2 className="nombre">{name}</h2>
      <p className="descrip">{description}</p>
      <div className="buttons">
        <a
          className="btn-link"
          href={link1}
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Hub
        </a>
        <a
          className="btn-link"
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
};

export default Card;
