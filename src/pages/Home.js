import Radio from "../components/Radio";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/spectrum.gif";
import notes from "../assets/img/notes.gif";
import Logout from "../components/Logout";
import Favoris from "../components/Favoris";
import { useState } from "react";

const Home = ({ currUser, setCurrUser }) => {
  const [favorites, setFavorites] = useState(null);
  return (
    <>
      <section className="header">
        <img className="logo" src={logo} alt="logo sound spectrum" />
        <div className="title">
          <h1>SOUND SPECTRUM</h1>
          {currUser == null && <p>Bienvenue sur Sound Spectrum</p>}
        </div>
        {currUser == null && (
          <div className="authenticate">
            {" "}
            <NavLink to="/login">
              <button>Se connecter</button>
            </NavLink>
            <NavLink to="/signup">
              <button>S'inscrire</button>
            </NavLink>{" "}
          </div>
        )}
        {currUser == null && (
          <div className="header-container">
            <p className="soundspectrum-description">
              Bienvenue sur Sound Spectrum, votre destination ultime pour le
              streaming radio ! Découvrez un univers musical infini avec nos
              nombreuses stations soigneusement sélectionnées couvrant tous les
              genres. Explorez de nouveaux horizons et plongez dans vos styles
              préférés grâce à notre système de filtrage intuitif. Créez votre
              liste de favoris et profitez de votre musique préférée à tout
              moment. Rejoignez-nous dès maintenant pour une expérience musicale
              fluide et immersive. Inscrivez-vous et laissez-vous emporter par
              la diversité sonore de Sound Spectrum.
            </p>
          </div>
        )}
        {currUser != null && (
          <div className="logout">
            <Logout setCurrUser={setCurrUser} />
            {currUser.role === "admin" && (
              <a href="http://localhost:3000/admin">Panel admin</a>
            )}
          </div>
        )}
        <div className="portée">
          <img src={notes} alt="gif portée" />
        </div>
      </section>
      {currUser != null && (
        <section className="radio-main">
          <div className="favoris-container">
            <div className="favoris-title">
              <h2>Mes radios favorites</h2>
            </div>
            <div className="favoris-radios">
              {localStorage.getItem("favorites") === null && (
                <p>Commencez à ajouter vos radios favorites</p>
              )}
              <Favoris favorites={favorites} setFavorites={setFavorites} />
            </div>
          </div>
          <div className="radios-container">
            <div className="radios-title">
              <h2>radios</h2>
            </div>
            <div className="radios">
              <Radio favorites={favorites} setFavorites={setFavorites} />
            </div>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};

export default Home;
