
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm">
      <div className="container d-flex align-items-center">

        {/* Logo */}
        <div className="navbar-col navbar-col-left">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            onClick={() => scrollToSection("hero-section")}
          >
            LocalServe.
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className={`navbar-collapse collapse ${
            menuOpen ? "show" : ""
          } navbar-col navbar-col-center`}
        >
          <ul className="navbar-nav d-flex gap-3 gap-md-4 justify-content-center mb-0">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("hero-section")}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("services")}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("works-section")}
              >
                How It Works
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("about-section")}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("contact-section")}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Login / Register */}
        <div className="d-flex align-items-center gap-2 navbar-col navbar-col-right mt-3 mt-md-0">

          <button
            type="button"
            onClick={() => navigate("/login/customer")}
            className="btn btn-outline-success rounded-pill"
          >
            <i className="bi bi-person"></i>
          </button>

          <button
            type="button"
            onClick={() => navigate("/register/provider")}
            className="btn btn-success rounded-pill px-4"
          >
            Become a Provider
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

