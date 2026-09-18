
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../login/Login.css";
import "./Register.css";

const ROLES = {
  user: {
    label: "Customer",
    icon: "bi-person",
    heading: "Get things done around the house.",
    subtext:
      "Book trusted local pros in minutes, track your service history, and pay securely.",
    badge: {
      icon: "bi-star-fill",
      title: "4.9",
      note: "Average pro rating",
    },
  },
};

export default function CustomerRegister() {
  const navigate = useNavigate();
  const [role] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const active = ROLES[role];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering as:", role);
    navigate("/Dashboard");
  };

  return (
    <div className="login-page d-flex align-items-stretch flex-column flex-lg-row">

      {/* Brand / Context Panel */}
      <div className="login-visual d-none d-lg-flex flex-column justify-content-between">
        <Link to="/" className="login-logo">
          <i className="bi bi-geo-alt-fill"></i> LocalServe
        </Link>

        <div className="login-visual-content">
          <div className="login-circle">
            <i className={`bi ${active.icon}`}></i>
          </div>

          <div className="login-floating-badge">
            <span className="login-floating-icon">
              <i className={`bi ${active.badge.icon}`}></i>
            </span>

            <span>
              <strong>{active.badge.title}</strong>
              <small>{active.badge.note}</small>
            </span>
          </div>
        </div>

        <div className="login-visual-copy">
          <h2>{active.heading}</h2>
          <p>{active.subtext}</p>
        </div>
      </div>

      {/* Form Panel */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">

          <Link to="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </Link>

          <h1 className="login-title">Create your account</h1>

          <p className="login-subtitle">
            Sign up to start booking trusted local pros.
          </p>

          <form onSubmit={handleSubmit} noValidate>

            <label className="field-label" htmlFor="fullname">
              Full name
            </label>

            <div className="input-wrap">
              <i className="bi bi-person"></i>

              <input
                id="fullname"
                type="text"
                placeholder="Your full name"
                className="login-input"
                required
              />
            </div>

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
                placeholder="Create a password"
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
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>

            <label className="field-label" htmlFor="confirm-password">
              Confirm password
            </label>

            <div className="input-wrap">
              <i className="bi bi-lock"></i>

              <input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                className="login-input"
                required
              />

              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                <i
                  className={`bi ${
                    showConfirm ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>

            <label className="terms-check">
              <input type="checkbox" required />

              I agree to the{" "}
              <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </label>

            <button type="submit" className="login-submit">
              Create account
            </button>
          </form>

          <p className="login-footer-text">
            Already have an account?{" "}
            <Link to="/login">Log in</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

