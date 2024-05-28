import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-3 mb-4 text-light border">
      <div className="container text-center">
        <span>© {new Date().getFullYear()} HACKLIFE</span>
        <div>
          <Link to="/aboutus" className="mx-2 text-light">
            Sobre Nosotros
          </Link>
          <Link to="/Contact" className="mx-2 text-light">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
