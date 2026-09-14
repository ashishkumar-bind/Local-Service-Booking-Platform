import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const ROLES = {
  user: {
    label: "Customer",
    icon: "bi-person",
    heading: "Find trusted help, fast.",
    subtext:
      "Book verified electricians, plumbers, carpenters and more — all from one place.",
    badge: { icon: "bi-star-fill", title: "4.9", note: "Average pro rating" },
    identifierLabel: "Email or phone number",
    identifierPlaceholder: "you@example.com",
    submitLabel: "Log in",
    footer: {
      text: "New to LocalServe?",
      linkText: "Create an account",
    },
  },
  provider: {
    label: "Service Provider",
    icon: "bi-tools",
    heading: "Grow your business with LocalServe.",
    subtext:
      "Manage bookings, get discovered by customers nearby, and get paid on time.",
    badge: {
      icon: "bi-briefcase-fill",
      title: "12,000+",
      note: "Active pros on LocalServe",
    },
    identifierLabel: "Provider email or phone",
    identifierPlaceholder: "you@business.com",
    submitLabel: "Log in as Provider",
    footer: {
      text: "Not registered yet?",
      linkText: "Register your service",
    },
  },
  admin: {
    label: "Admin",
    icon: "bi-shield-lock",
    heading: "Admin control center.",
    subtext:
      "Oversee providers, bookings, disputes and platform activity from one dashboard.",
    badge: {
      icon: "bi-shield-check",
      title: "Restricted",
      note: "Authorized staff only",
    },
    identifierLabel: "Admin email",
    identifierPlaceholder: "admin@localserve.com",
    submitLabel: "Log in to Admin Panel",
    footer: null,
  },
};

export default function Login() {
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const active = ROLES[role];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up to your auth logic here, keyed by `role`
    console.log("Logging in as:", role);
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
          <a href="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </a>

          {/* Role switcher */}
          <div
            className="role-switch"
            role="tablist"
            aria-label="Choose login type"
          >
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

          <h1 className="login-title">Log in</h1>
          <p className="login-subtitle">
            {role === "admin"
              ? "Restricted access — authorized staff only."
              : `Welcome back. Log in to continue as a ${active.label.toLowerCase()}.`}
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <label className="field-label" htmlFor="identifier">
              {active.identifierLabel}
            </label>
            <div className="input-wrap">
              <i className="bi bi-envelope"></i>
              <input
                id="identifier"
                type="text"
                placeholder={active.identifierPlaceholder}
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

            {role === "admin" && (
              <>
                <label className="field-label" htmlFor="admin-code">
                  Access code
                </label>
                <div className="input-wrap">
                  <i className="bi bi-key"></i>
                  <input
                    id="admin-code"
                    type="text"
                    placeholder="6-digit code"
                    className="login-input"
                    required
                  />
                </div>
              </>
            )}

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
              {active.submitLabel}
            </button>
          </form>

          {active.footer && (
            <p className="login-footer-text">
              {active.footer.text}{" "}
              <Link to="/register">{active.footer.linkText}</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
