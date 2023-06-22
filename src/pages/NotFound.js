import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Erreur 404</h1>
      <NavLink to="/">
        <h2> Retourner à la page d'accueil </h2>
      </NavLink>
    </div>
  );
};

export default NotFound;
