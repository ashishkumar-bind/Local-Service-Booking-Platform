import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3 text-white">
      <div className="container">

        <div className="row g-4">

          {/* Logo & About */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-white">
              <i className="bi bi-geo-alt-fill text-white"></i>
              LocalServe
            </h3>

            <p className="text-secondary mt-3 text-white">
              Find trusted local professionals for your everyday needs.
              Simple, reliable and convenient service booking.
            </p>

            <div className="d-flex gap-3 mt-4 ">
              <a href="#" className="footer-icon text-white">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="footer-icon text-white">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="footer-icon text-white">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="footer-icon text-white">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2 col-md-3">
            <h5 className="fw-bold mb-3 text-white">Quick Links</h5>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="#hero-section" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white">Services</a>
              </li>
              <li>
                <a href="#works-section" className="text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about-section" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact-section" className="text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div className="col-6 col-lg-2 col-md-3">
            <h5 className="fw-bold mb-3 text-white">For Users</h5>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="/login" className="text-white">Login</a>
              </li>
              <li>
                <a href="/register" className="text-white">Register</a>
              </li>
              <li>
                <a href="#services" className="text-white">
                  Book a Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-white">Contact Us</h5>

            <p className="text-secondary mb-2 text-white">
              <i className="bi bi-geo-alt-fill text-white me-2"></i>
              Delhi NCR, India
            </p>

            <p className="text-secondary mb-2 text-white">
              <i className="bi bi-telephone-fill text-white me-2"></i>
                +91 7084479094 & +91 9548600131
            </p>

            <p className="text-secondary text-white">
              <i className="bi bi-envelope-fill text-white me-2"></i>
              support@localserve.com
            </p>
          </div>

          {/* Serivce provider button */}
          <div className="footer-provider">
            <p>Want to offer your services?</p>
            <Link to='/register/service-provider' className='provider-btn'>
            Become a Service Provider
            </Link>
          </div>

        </div>

        <hr className="my-4 text-white" />

        {/* Bottom */}
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-2 mb-md-0 text-white">
              © 2026 LocalServe. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="footer-bottom-link  me-1 text-white">
              Privacy Policy |
            </a>

            <a href="#" className="footer-bottom-link text-white">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;