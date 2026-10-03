import React from "react";
import "./Hero.css";

function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Heading */}
          <h1 className="hero-title">
            Find Home Service <br />
            Experts Near You
          </h1>

          {/* Description */}
          <p className="hero-text">
            Browse verified professionals, compare services, and hire with
            confidence. Every expert is certified, vetted, and ready to help
            with your home needs.
          </p>

          {/* Search Box */}
          {/* Search Box */}
          <div className="search-box d-flex align-items-center flex-lg-row flex-column gap-1">
            <div className="search-item w-100 w-lg-auto flex-fill">
              <i className="bi bi-search text-success me-2"></i>
              <input
                type="text"
                placeholder="what could you need?"
                className="input-field"
              />
            </div>

            <div className="vr d-none d-lg-block mx-2"></div>

            <div className="search-item location-item w-100 w-lg-auto flex-fill">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              <input
                type="text"
                placeholder="city"
                className="input-field"
              />
            </div>

            <button className="btn search-button justify-content-center w-20 w-lg-auto rounded-pill">
              <i className="bi bi-search text-white"></i>
              
            </button>
          </div>
        </div>

        {/* Professional Image - right side, positioned via CSS */}
        {/* <img
          src="/Handyman.png"
          alt="Professional"
          className="hero-professional-img"
        /> */}
      </div>
    </section>
  );
}

export default HeroSection;
