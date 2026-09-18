import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as customer");
  };

  return (
    <div className="login-page d-flex align-items-stretch flex-column flex-lg-row">
      {/* ===== Brand / context panel ===== */}
      <div className="login-visual d-none d-lg-flex flex-column justify-content-between">
        <a href="/" className="login-logo">
          <i className="bi bi-geo-alt-fill"></i> LocalServe
        </a>

        <div className="login-visual-content">
          <div className="login-circle">
            <i className="bi bi-person"></i>
          </div>

          <div className="login-floating-badge">
            <span className="login-floating-icon">
              <i className="bi bi-star-fill"></i>
            </span>
            <span>
              <strong>4.9</strong>
              <small>Average pro rating</small>
            </span>
          </div>
        </div>

        <div className="login-visual-copy">
          <h2>Find trusted help, fast.</h2>
          <p>
            Book verified electricians, plumbers, carpenters and more — all
            from one place.
          </p>
        </div>
      </div>

      {/* ===== Form panel ===== */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">
          <a href="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </a>

          <h1 className="login-title">Log in</h1>
          <p className="login-subtitle">
            Welcome back. Log in to continue booking trusted local
            professionals.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <label className="field-label" htmlFor="identifier">
              Email or phone number
            </label>
            <div className="input-wrap">
              <i className="bi bi-envelope"></i>
              <input
                id="identifier"
                type="text"
                placeholder="you@example.com"
                className="login-input"
                required
              />
            </div>

            <label className="field-label" htmlFor="password">
              Password
            </label>
            <div className="input-wrap">
              <i className="bi bi-lock"></i>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="login-input"
                required
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </button>
            </div>

            <div className="login-row">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-submit">
              Log in
            </button>
          </form>

          <p className="login-footer-text">
            New to LocalServe?{" "}
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}