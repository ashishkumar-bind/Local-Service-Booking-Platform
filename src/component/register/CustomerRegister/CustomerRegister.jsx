import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../registration.css"

function CustomerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const alreadyExists = customers.some(
      (customer) => customer.email === formData.email
    );

    if (alreadyExists) {
      alert("Customer with this email already exists");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: "USER",
    };

    customers.push(newCustomer);

    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );

    alert("Customer registration successful!");

    navigate("/login/customer");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <Link to="/" className="auth-logo">
          <i className="bi bi-geo-alt-fill"></i>
          LocalServe
        </Link>

        {/* Role Switcher */}
        <div className="role-switcher">

          <button
            type="button"
            className="role-tab active"
            onClick={() => navigate("/register/customer")}
          >
            <i className="bi bi-person"></i>
            Customer
          </button>

          <button
            type="button"
            className="role-tab"
            onClick={() => navigate("/register/service-provider")}
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

        {/* Heading */}
        <div className="auth-heading">
          <h1>Create your account</h1>

          <p>
            Sign up to start booking trusted local pros.
          </p>
        </div>

        {/* Form */}
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
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login/customer">
            Sign in
          </Link>
        </p>

      </div>

    </div>
  );
}

export default CustomerRegister;