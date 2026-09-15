import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm">
      <div className="container d-flex align-items-center">
        {/* logo - left column */}
        <div className="navbar-col navbar-col-left">
          <Link className="navbar-brand fw-bold" to="/"
           onClick={() => {
                    setTimeout(() => {
                      document.getElementById("hero-section")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
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
        <div className={`navbar-collapse collapse ${menuOpen ? "show" : ""} navbar-col navbar-col-center`}>
          <ul className="navbar-nav d-flex gap-3 gap-md-4 justify-content-center mb-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("hero-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("services")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("works-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              >
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("about-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("contact-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Login / Register - right column */}
        <div className="d-flex align-items-center gap-2 navbar-col navbar-col-right mt-3 mt-md-0">
          <button
            type="button"
            onClick={() => navigate("/login/customer")}
            className="btn btn-outline-success rounded-pill"
          >
            <i className="bi bi-person "></i>
            {/* login */}
          </button>
          <button
            type="button"
            onClick={() => navigate("/register/customer")}
            className="btn btn-success rounded-pill px-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;