import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function ProviderLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as service provider");
  };

  return (
    <div className="login-page d-flex align-items-stretch flex-column flex-lg-row">
      {/* Brand / context panel */}
      <div className="login-visual d-none d-lg-flex flex-column justify-content-between">
        <a href="/" className="login-logo">
          <i className="bi bi-geo-alt-fill"></i> LocalServe
        </a>

        <div className="login-visual-content">
          <div className="login-circle">
            <i className="bi bi-tools"></i>
          </div>

          <div className="login-floating-badge">
            <span className="login-floating-icon">
              <i className="bi bi-briefcase-fill"></i>
            </span>

            <span>
              <strong>12,000+</strong>
              <small>Active pros on LocalServe</small>
            </span>
          </div>
        </div>

        <div className="login-visual-copy">
          <h2>Welcome back, Provider.</h2>

          <p>
            Manage your bookings, connect with customers nearby, and grow your
            service business with LocalServe.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">
          <a href="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </a>

          <h1 className="login-title">Provider Log in</h1>

          <p className="login-subtitle">
            Welcome back. Log in to manage your services and bookings.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Email / Phone */}
            <label className="field-label" htmlFor="providerEmail">
              Email or phone number
            </label>

            <div className="input-wrap">
              <i className="bi bi-envelope"></i>

              <input
                id="providerEmail"
                type="text"
                placeholder="you@business.com"
                className="login-input"
                required
              />
            </div>

            {/* Password */}
            <label className="field-label" htmlFor="providerPassword">
              Password
            </label>

            <div className="input-wrap">
              <i className="bi bi-lock"></i>

              <input
                id="providerPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="login-input"
                required
              />

              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                ></i>
              </button>
            </div>

            {/* Remember / Forgot */}
            <div className="login-row">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/provider-forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            {/* Login */}
            <button type="submit" className="login-submit">
              Log in as Provider
            </button>
          </form>

          {/* Provider Register */}
          <p className="login-footer-text">
            New to LocalServe?{" "}
            <Link to="/register/provider">Register as a Provider</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}
