import React from "react";
import "./Hero.css";

function HeroSection() {
  return (
    <>
      <section className="hero-section" id="hero-section">
        <div class="container">
          <div className="row align-items-center">
            {/* <!-- =====================
                 LEFT SIDE
                  ====================== --> */}

            <div className="col-lg-6">
              {/* <!-- Trusted Badge --> */}

              <div className="trusted-badge mb-3">
                <span>⚡</span>
                Trusted by 10,000+ Happy Customers
              </div>

              {/* <!-- Heading --> */}
              <h1 className="hero-title">
                Find Trusted <br />
                Local Professionals <br />
                <span>Near You</span>
              </h1>

              {/* <!-- Description --> */}

              <p className="hero-text">
                Book reliable local professionals for your everyday needs. Fast,
                easy, and hassle-free!
              </p>

              {/* <!-- =====================
                                         SEARCH BOX
                            ====================== --> */}

              <div className="search-box d-flex align-items-center flex-lg-row flex-column gap-1">
                {/* <!-- Service --> */}

                <div className="search-item w-100 w-lg-auto flex-fill">
                  <span className="bi bi-search text-success"></span>

                  <span>
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      className="input-field"
                    />
                  </span>
                </div>

                {/* Divider - desktop only */}
                <div className="vr d-none d-lg-block mx-2"></div>

                {/* <!-- Location --> */}

                <div className="search-item location-item w-100 w-lg-auto flex-fill">
                  <span className="location-icon">
                    <i className="bi bi-geo-alt-fill text-success me-2"></i>
                  </span>

                  <span>
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="input-field"
                    />
                  </span>
                </div>

                {/* <!-- Search Button --> */}

                <button className="btn search-button justify-content-center w-20 w-lg-auto">
                  Search
                </button>
              </div>
            </div>

            {/* <!-- =====================
                 RIGHT SIDE
            ====================== --> */}

            <div className="col-lg-6">
              <div className="hero-image-area">
                {/* <!-- Background Circle --> */}

                <div className="image-circle"></div>

                {/* <!-- Professional Image --> */}

                <img
                  src="pic-1.jpg"
                  alt="Professional"
                  class="professional-img rounded-pill"
                ></img>

                {/* <!-- Rating Card --> */}

                <div className="rating-card floating-card">
                  <div className="rating-icon">★</div>

                  <div>
                    <strong>4.8</strong>

                    <small>Average Rating</small>
                  </div>
                </div>

                {/* <!-- Verified Card --> */}

                <div className="verified-card floating-card">
                  <div className="verified-icon">✓</div>

                  <div>
                    <strong>Verified</strong>

                    <small>Professionals</small>
                  </div>
                </div>

                {/* <!-- Customers Card --> */}

                <div className="customers-card floating-card">
                  <div className="customer-icon">👥</div>

                  <div>
                    <strong>10K+</strong>

                    <small>Happy Customers</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
