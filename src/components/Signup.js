import { useRef, useState } from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const Signup = ({ setCurrUser }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const handleChange = () => setCheckbox(!checkbox);
  //!Const Validations mdp
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter = /^(?=.*[!@#\$%\^&\*\?\:\;\,])/.test(
    password
  );
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasValidLength = password.length >= 8;
  const googleId = "service_bhbqujl";
  const templateId = "template_00shvju";
  const publicKey = `${process.env.REACT_APP_ID}`;

  const formRef = useRef();

  const signup = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/signup";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      navigate("/", { replace: true, state: { from: "signup" } });
      alert("Vous êtes connecté, vous avez reçu un Email");
    } catch (error) {
      console.log("error", error);
      alert("Cette adresse existe déjà!");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(googleId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        
      },
      (error) => {
        console.log(error.text);
      }
    );

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    if (
      passwordHasLowercaseLetter &&
      passwordHasUppercaseLetter &&
      passwordHasSpecialCharacter &&
      passwordHasNumber &&
      passwordHasValidLength
    ) {
      if (password === confirmPassword && checkbox === true) {
        signup(userInfo, setCurrUser);
        e.target.reset();
      } else if (password !== confirmPassword) {
        alert("les mots de passe ne correspondent pas");
      } else if (checkbox === false) {
        alert("Veuillez accepter les RGPD");
      }
    } else {
      alert(
        "Le mot de passe doit contenir un caractère minuscule, majuscule, un chiffre, un caractère spécial et au moins huit caractères!"
      );
    }
  };

  return (
    <>
      <section className="title-form">
        <div className="link-accueil-container">
          <NavLink className="link-accueil" to="/">
            <p>retour à l'accueil</p>
          </NavLink>
        </div>
        <h1>Formulaire d'inscription</h1>
        <div className="form-container">
          <div className="logo">
            <img src={logo} alt="logo sound spectrum" />
          </div>
          <div className="form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="email-container">
                <input
                  className="input-mail"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  max="40"
                />
                <i class="fa-regular fa-envelope" id="email"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  required
                  max="40"
                />
                <i class="fa-solid fa-lock" id="lock"></i>
                <p className="mdp-validate">
                  {" "}
                  8 caractères minimum et contenir A-Z, a-z, 0-9, !@#%&
                </p>
              </div>

              <div className="password-container">
                <input
                  className="input-password-confirm"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder=" Confirmation mot de passe"
                  required
                  max="40"
                />
                <i class="fa-solid fa-lock" id="lock"></i>
              </div>
              <button className="button-form" type="submit">
                s'inscrire
              </button>
              <div className="rgpd-container">
                <input
                  type="checkbox"
                  name="rgpd"
                  id="rgpd"
                  checked={checkbox}
                  onChange={handleChange}
                />
                <label htmlFor="rgpd">
                  Accepter les <a href="/rgpd">RGPD</a>
                </label>
              </div>
            </form>
            <div className="navlink-container">
              <NavLink className="inscription" to="/login">
                <p>Se connecter</p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
