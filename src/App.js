import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Rgpd from "./pages/Rgpd";
import Profil from "./pages/Profil";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
const App = () => {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://soundsprectrum-eee2cb861559.herokuapp.com/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => setCurrUser(user));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route
          path="/login"
          element={<LoginPage currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route
          path="/signup"
          element={<SignupPage currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="/profil" element={<Profil setCurrUser={setCurrUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
