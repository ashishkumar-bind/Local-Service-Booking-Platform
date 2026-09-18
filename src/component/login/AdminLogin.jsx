import { useState } from "react";
import "./Login.css";
import { useNavigate,Link } from "react-router-dom";

export default function AdminLogin() {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as admin");
    navigate("/dashboard/admin");
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
            <i className="bi bi-shield-lock"></i>
          </div>

          <div className="login-floating-badge">
            <span className="login-floating-icon">
              <i className="bi bi-shield-check"></i>
            </span>

            <span>
              <strong>Restricted</strong>
              <small>Authorized staff only</small>
            </span>
          </div>
        </div>

        <div className="login-visual-copy">
          <h2>Admin control center.</h2>

          <p>
            Oversee providers, bookings, disputes and platform activity from one
            dashboard.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">
            
          <a href="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </a>

          <h1 className="login-title">Admin Log in</h1>

          <p className="login-subtitle">
            Restricted access. Log in with your authorized admin credentials.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <label className="field-label" htmlFor="adminEmail">
              Admin email
            </label>

            <div className="input-wrap">
              <i className="bi bi-envelope"></i>

              <input
                id="adminEmail"
                type="email"
                placeholder="admin@localserve.com"
                className="login-input"
                required
              />
            </div>

            {/* Password */}
            <label className="field-label" htmlFor="adminPassword">
              Password
            </label>

            <div className="input-wrap">
              <i className="bi bi-lock"></i>

              <input
                id="adminPassword"
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

              <Link to="/admin-forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            {/* Login */}
            <button type="submit" className="login-submit">
              Log in as Admin
            </button>
          </form>

          <p className="login-footer-text">
            Not an admin? <Link to="/login">Go to Customer Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
