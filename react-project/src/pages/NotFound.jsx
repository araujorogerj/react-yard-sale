import React from "react";
import gato from "../icons/gato.jpeg";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <div className="pag">
      <div className="imgContainer">
        <img src={gato} className="notFoundCat" />
        <h1>Yo había ponido mi página aquí</h1>
        <h1>404</h1>
        <button className="primary-button">Regresar</button>
      </div>
    </div>
  );
};

export default NotFound;
