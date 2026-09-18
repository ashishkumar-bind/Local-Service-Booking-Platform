import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../registration.css"

function ServiceProviderRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const providers =
      JSON.parse(localStorage.getItem("providers")) || [];

    const alreadyExists = providers.some(
      (provider) => provider.email === formData.email
    );

    if (alreadyExists) {
      alert("Provider with this email already exists");
      return;
    }

    const newProvider = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      service: formData.service,
      experience: formData.experience,
      password: formData.password,
      role: "PROVIDER",
      status: "PENDING",
    };

    providers.push(newProvider);

    localStorage.setItem(
      "providers",
      JSON.stringify(providers)
    );

    alert(
      "Provider registration successful! Your profile is pending approval."
    );

    navigate("/login/provider");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          <i className="bi bi-geo-alt-fill"></i>
          LocalServe
        </Link>

        {/* Role Switcher */}
        <div className="role-switcher">

          <button
            type="button"
            className="role-tab"
            onClick={() => navigate("/register/customer")}
          >
            <i className="bi bi-person"></i>
            Customer
          </button>

          <button
            type="button"
            className="role-tab active"
            onClick={() => navigate("/register/provider")}
          >
            <i className="bi bi-tools"></i>
            Service Provider
          </button>

          <button
            type="button"
            className="role-tab"
            onClick={() => navigate("/login/admin")}
          >
            <i className="bi bi-shield-check"></i>
            Admin
          </button>

        </div>

        <div className="auth-heading">
          <h1>Become a service provider</h1>

          <p>
            Join LocalServe and connect with customers.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label>Full name</label>

            <div className="input-wrapper">
              <i className="bi bi-person"></i>

              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Email</label>

            <div className="input-wrapper">
              <i className="bi bi-envelope"></i>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Phone number</label>

            <div className="input-wrapper">
              <i className="bi bi-telephone"></i>

              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Location</label>

            <div className="input-wrapper">
              <i className="bi bi-geo-alt"></i>

              <input
                type="text"
                name="location"
                placeholder="Your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Service category</label>

            <div className="input-wrapper">
              <i className="bi bi-tools"></i>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select your service
                </option>
                <option value="Electrician">
                  Electrician
                </option>
                <option value="Plumber">
                  Plumber
                </option>
                <option value="Carpenter">
                  Carpenter
                </option>
                <option value="Cleaner">
                  Cleaner
                </option>
                <option value="AC Repair">
                  AC Repair
                </option>
              </select>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Experience</label>

            <div className="input-wrapper">
              <i className="bi bi-briefcase"></i>

              <input
                type="number"
                name="experience"
                placeholder="Years of experience"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <i className="bi bi-lock"></i>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm password</label>

            <div className="input-wrapper">
              <i className="bi bi-lock"></i>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" required />

            <span>
              I agree to the{" "}
              <a href="#">Terms of Service</a>{" "}
              and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
          >
            Create Provider Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login/service-provider-login">
            Sign in
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ServiceProviderRegister;