import React from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profil = ({ setCurrUser }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const deleteAccount = async (setCurrUser) => {
    const url = "https://soundsprectrum-eee2cb861559.herokuapp.com/users";
    try {
      const response = await fetch(url, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.removeItem("token");
      setCurrUser(null);
      alert("Votre compte a bien été supprimé");
    } catch (error) {
      console.log("error", error);
      alert("Une erreur est survenue");
    }
  };
  const handleClick = (e) => {
    deleteAccount(setCurrUser);
    e.preventDefault();
    navigate("/");
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const url =
      "https://soundsprectrum-eee2cb861559.herokuapp.com/users/password";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      alert("Votre mot de passe a bien été mis à jour");
    } catch (error) {
      console.log("error", error);
      alert("Une erreur est survenue");
    }
  };

  return (
    <>
      <section className="title-form">
        <div className="link-home-container">
          <NavLink className="link-home" to="/">
            <p>retour à l'accueil</p>
          </NavLink>
        </div>
        <h1>profil</h1>
        <div className="form-container">
          <div className="logo">
            <img src={logo} alt="logo sound spectrum" />
          </div>
          <div className="form-card">
            <form onSubmit={updatePassword}>
              <div className="email-container">
                <input
                  className="input-mail"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  max="40"
                />
                <i className="fa-regular fa-envelope" id="email"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="Nouveau mot de passe"
                  required
                  max="40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fa-solid fa-lock" id="lock"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="confirmation du mot de passe"
                  required
                  max="40"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i className="fa-solid fa-lock" id="lock"></i>
              </div>
              <button className="button-form" type="submit">
                mettre à jour
              </button>
            </form>
            <div className="navlink-container">
              <p onClick={handleClick}>Supprimer mon compte</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
