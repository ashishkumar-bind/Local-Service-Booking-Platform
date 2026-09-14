import React from "react";
import "./works.css";
function Works() {
  return (
    <section className="how-it-works py-5 container mt-4 rounded-3" id="works-section">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-7">
            <p className="section-label mb-2 ">HOW IT WORKS</p>

            <h2 className="section-title mb-2">
              Get Your Work Done in 3 Simple Steps
            </h2>

            <p className="section-text mb-4">
              Booking a service is just a few easy steps. Follow these simple
              steps and get professional help at your doorstep.
            </p>

            {/* Steps */}
            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-md-4">
                <div className="step-item">

                    <div className="step-top">
                  <div classlass="step-icon">
                    <i className="bi bi-search bg-success text-white p-2 rounded-pill"></i>
                  </div>
                  <span className="step-number">01</span>
                  </div>
                  <h5>Search Service</h5>

                  <p>
                    Find the service you need from our wide range of categories.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-md-4">
                <div className="step-item">

                    <div className="step-top">
                  <div classlass="step-icon">
                    <i className="bi bi-person bg-success text-white p-2 rounded-pill"></i>
                  </div>
                  <span className="step-number">02</span>
                  </div>
                  <h5>Choose Professionals</h5>

                  <p className="text-gray">
                    Find the service you need from our wide range of categories.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-md-4">
                <div className="step-item">

                    <div className="step-top">
                  <div classlass="step-icon">
                    <i className="bi bi-calendar bg-success text-white p-2 rounded-pill"></i>
                  </div>
                  <span className="step-number">03</span>
                  </div>
                  <h5>Book & Relax</h5>

                  <p className="text-gray">
                    Find the service you need from our wide range of categories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5">
            <div className="how-image-wrapper">
              <img
                src="/pic-2.jpg"
                alt="Professional providing service"
                className="img-fluid"
              />
              <div className="image-badge">
                <strong>✓ 100% Secure</strong>
                <small>Professional Service</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
