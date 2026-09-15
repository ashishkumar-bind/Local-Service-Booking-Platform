import { useState } from "react";
import { Link } from "react-router-dom";
import '../login/Login.css';
import "./Register.css";

const ROLES = {
  user: {
    label: "Customer",
    icon: "bi-person",
    heading: "Get things done around the house.",
    subtext:
      "Book trusted local pros in minutes, track your service history, and pay securely.",
    badge: { icon: "bi-star-fill", title: "4.9", note: "Average pro rating" },
  },
  provider: {
    label: "Service Provider",
    icon: "bi-tools",
    heading: "List your services, meet new customers.",
    subtext:
      "Set your rates, manage your schedule, and grow your local business with LocalServe.",
    badge: { icon: "bi-briefcase-fill", title: "12,000+", note: "Active pros on LocalServe" },
  },
  admin: {
    label: "Admin",
    icon: "bi-shield-lock",
    heading: "Admin control center.",
    subtext: "Oversee providers, bookings, disputes and platform activity from one dashboard.",
    badge: { icon: "bi-shield-check", title: "Restricted", note: "Authorized staff only" },
  },
};

const SERVICE_CATEGORIES = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Cleaner",
  "Other",
];

export default function Register() {
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const active = ROLES[role];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up to your signup logic here, keyed by `role`
    console.log("Registering as:", role);
  };

  return (
    <div className="login-page d-flex align-items-stretch flex-column flex-lg-row">
      {/* ===== Brand / context panel ===== */}
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

      {/* ===== Form panel ===== */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">
          <Link to="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </Link>

          {/* Role switcher */}
          <div className="role-switch" role="tablist" aria-label="Choose account type">
            {Object.entries(ROLES).map(([key, value]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={role === key}
                className={`role-tab ${role === key ? "active" : ""}`}
                onClick={() => setRole(key)} 
              >
                <i className={`bi ${value.icon}`}></i>
                {value.label}
              </button>
            ))}
          </div>

          {role === "admin" ? (
            /* ===== Admin: no self-registration ===== */
            <div className="admin-restricted">
              <div className="admin-restricted-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h1 className="login-title">Admin accounts are restricted</h1>
              <p className="login-subtitle">
                Admin access is granted internally by LocalServe. If you need an
                admin account, contact your system administrator.
              </p>
              <Link to="/login" className="login-submit admin-restricted-btn">
                Go to Admin Login
              </Link>
            </div>
          ) : (
            <>
              <h1 className="login-title">Create your account</h1>
              <p className="login-subtitle">
                {role === "provider"
                  ? "Join as a service provider and start getting bookings."
                  : "Sign up to start booking trusted local pros."}
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

                {role === "provider" && (
                  <>
                    <label className="field-label" htmlFor="business">
                      Business name
                    </label>
                    <div className="input-wrap">
                      <i className="bi bi-briefcase"></i>
                      <input
                        id="business"
                        type="text"
                        placeholder="e.g. Sharma Electric Works"
                        className="login-input"
                        required
                      />
                    </div>

                    <label className="field-label" htmlFor="category">
                      Service category
                    </label>
                    <div className="input-wrap">
                      <i className="bi bi-tools"></i>
                      <select id="category" className="login-input login-select" required defaultValue="">
                        <option value="" disabled>
                          Select a category
                        </option>
                        {SERVICE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <label className="field-label" htmlFor="identifier">
                  {role === "provider" ? "Business email or phone" : "Email or phone number"}
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
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
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
                    <i className={`bi ${showConfirm ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </button>
                </div>

                <label className="terms-check">
                  <input type="checkbox" required />
                  I agree to the{" "}
                  <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>
                </label>

                <button type="submit" className="login-submit">
                  {role === "provider" ? "Register as Provider" : "Create account"}
                </button>
              </form>

              <p className="login-footer-text">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}