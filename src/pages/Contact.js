import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/spectrum.gif";

const FormContact = () => {
  const googleId = "service_bhbqujl";
  const templateId = "template_gesm9lp";
  const publicKey = `${process.env.REACT_APP_ID}`;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs.sendForm(googleId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2500);
      },
      (error) => {
        console.log(error.text);
        formMess.innerHTML =
          "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2500);
      }
    );
  };

  return (
    <>
     
      <section className="title-form">
      <div className="link-accueil-container">
        <NavLink className="link-accueil" to="/">
          <p>retour à l'accueil</p>
        </NavLink>
      </div>
        <h1>contact</h1>
        <div className="form-container">
          <div className="logo">
            <img src={logo} alt="logo sound spectrum" />
          </div>
          <div className="form-card">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name-container">
                <input
                  className="input-name"
                  type="text"
                  name="name"
                  placeholder="Nom"
                  required
                  autoComplete="off"
                  max="40"
                />
              </div>
              <div className="email-container">
                <input
                  className="input-mail"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                  max="40"
                />
              </div>
              <div className="message-container">
                <textarea
                className="input-area"
                  name="message"
                  placeholder="Écrivez votre message"
                  required
                  max="250"
                />
              </div>
              <button className="button-form" type="submit" value="Envoyer">Envoyer</button>
            </form>
            <div className="form-message"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormContact;
