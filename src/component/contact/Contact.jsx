import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <section id="contact-section" className="contact-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <small className="section-label">CONTACT US</small>

          <h2 className="fw-bold mt-2">
            Get In <span className="green-text">Touch</span>
          </h2>

          <p className="text-muted">
            Have a question or need help? We are here to help you.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">

              <h4 className="fw-bold mb-3">
                Let's Talk
              </h4>

              <p className="text-muted mb-4">
                Whether you need a service or want to know more about
                LocalServe, feel free to contact us.
              </p>

              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6>Our Location</h6>
                  <p>Delhi NCR, India</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <h6>Phone</h6>
                  <p>+91 7084479094 & +91 9548600131</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6>Email</h6>
                  <p>support@localserve.com</p>
                </div>
              </div>

            </div>
          </div>


          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">

              <h4 className="fw-bold mb-4">
                Send Us a Message
              </h4>

              <div className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="contact-btn">
                    Send Message
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;