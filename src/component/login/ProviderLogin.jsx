import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:8080/api/provider";

export default function ProviderLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      return setError("Please enter your email and password");
    }

    try {
      setLoading(true);
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      // backend response: { id, name, email }
      // customer ke "user" se alag rakhne ke liye "provider" key use ki hai
      // dashboard isi "id" se profile load karta hai
      localStorage.setItem("provider", JSON.stringify(data));
      navigate("/Dashboard/Provider");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
            {/* Email */}
            <label className="field-label" htmlFor="providerEmail">
              Email address
            </label>

            <div className="input-wrap">
              <i className="bi bi-envelope"></i>

              <input
                id="providerEmail"
                name="email"
                type="email"
                placeholder="you@business.com"
                className="login-input"
                value={form.email}
                onChange={handleChange}
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="login-input"
                value={form.password}
                onChange={handleChange}
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

            {error && (
              <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
            )}

            {/* Login */}
            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in as Provider"}
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