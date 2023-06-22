import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main">
      <div className="footer-container">
        <ul>
          <li>
            <NavLink className="link-footer" to="/profil">
              <p>profil</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="link-footer" to="/about">
              <p>à propos</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="link-footer" to="/contact">
              <p>contact</p>
            </NavLink>
          </li>
          <li>
            <a href="https://www.radio-browser.info/" target="_blank">
              api
            </a>
          </li>
          <li>
            <NavLink className="link-footer" to="/rgpd">
              <p>rgpd</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
