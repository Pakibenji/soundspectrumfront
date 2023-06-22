import { useRef } from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ setCurrUser }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login";
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
      console.log(response.headers.get("Authorization"));
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      navigate("/", { replace: true, state: { from: "login" } });
      alert("Vous êtes connecté");
    } catch (error) {
      alert(
        "L'adresse mail ou le mot de passe est erroné ou vous n'êtes pas inscrit"
      );
      console.log("error", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  return (
    <>
      <section className="title-form">
        <div className="link-accueil-container">
          <NavLink className="link-accueil" to="/">
            <p>retour à l'accueil</p>
          </NavLink>
        </div>
        <h1>Connexion</h1>
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
                <i className="fa-regular fa-envelope" id="email"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  required
                  max="40"
                />
                <i className="fa-solid fa-lock" id="lock"></i>
              </div>
              <button className="button-form" type="submit">
                Connexion
              </button>
            </form>
            <div className="navlink-container">
              <NavLink className="inscription" to="/signup">
                <p>Inscrivez-vous</p>
              </NavLink>
              <span>
                dès maintenant en un clic et découvrez un monde de radios
                personnalisées à portée de main !
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
