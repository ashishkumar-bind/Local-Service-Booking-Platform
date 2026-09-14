function About() {
  return (
    <section className="py-5" id="about-section">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="small fw-bold text-success">
              ABOUT LOCALSERVE
            </span>

            <h2 className="fw-bold mt-2 mb-3">
              Making Local Services
              <span className="text-success"> Simple & Reliable</span>
            </h2>

            <p className="text-secondary">
              LocalServe connects you with trusted local professionals
              for your everyday service needs. Whether you need an
              electrician, plumber, cleaner or any other professional,
              we make finding and booking them easy.
            </p>

            <p className="text-secondary">
              Our goal is to provide a simple, safe and convenient
              platform where customers can find reliable professionals
              and service providers can grow their business.
            </p>

            {/* Small Features */}
            <div className="row mt-4">

              <div className="col-6 mb-3">
                <h5 className="fw-bold text-success">100+</h5>
                <p className="small text-secondary mb-0">
                  Happy Customers
                </p>
              </div>

              <div className="col-6 mb-3">
                <h5 className="fw-bold text-success">50+</h5>
                <p className="small text-secondary mb-0">
                  Trusted Professionals
                </p>
              </div>

              <div className="col-6">
                <h5 className="fw-bold text-success">20+</h5>
                <p className="small text-secondary mb-0">
                  Services Available
                </p>
              </div>

              <div className="col-6">
                <h5 className="fw-bold text-success">24/7</h5>
                <p className="small text-secondary mb-0">
                  Customer Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6">

            <div className="bg-success bg-opacity-10 rounded-4 p-4">

              <div className="bg-white rounded-4 shadow-sm p-4">

                <h4 className="fw-bold mb-3">
                  Why Choose LocalServe?
                </h4>

                <div className="d-flex mb-3">
                  <div className="me-3">
                    <i className="bi bi-shield-check fs-3 text-success"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Trusted Professionals
                    </h6>
                    <p className="small text-secondary mb-0">
                      Find reliable and verified service professionals.
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <div className="me-3">
                    <i className="bi bi-cash-stack fs-3 text-success"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Transparent Pricing
                    </h6>
                    <p className="small text-secondary mb-0">
                      Know the service price before booking.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-calendar-check fs-3 text-success"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Easy Booking
                    </h6>
                    <p className="small text-secondary mb-0">
                      Book your required service in just a few clicks.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;