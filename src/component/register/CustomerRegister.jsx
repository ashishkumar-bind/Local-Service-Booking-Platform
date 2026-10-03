import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../login/Login.css";
import "./Register.css";

const API = "http://localhost:8080/api/auth";

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const active = ROLES[role];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      return setError("Please fill all required fields");
    }
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }
    if (!form.agree) {
      return setError("Please accept the Terms and Privacy Policy");
    }

    try {
      setLoading(true);
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      localStorage.setItem("user", JSON.stringify(data));
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
                name="name"
                type="text"
                placeholder="Your full name"
                className="login-input"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <label className="field-label" htmlFor="email">
              Email
            </label>

            <div className="input-wrap">
              <i className="bi bi-envelope"></i>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="login-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <label className="field-label" htmlFor="phone">
              Phone number
            </label>

            <div className="input-wrap">
              <i className="bi bi-telephone"></i>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="9999999999"
                className="login-input"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <label className="field-label" htmlFor="password">
              Password
            </label>

            <div className="input-wrap">
              <i className="bi bi-lock"></i>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="login-input"
                value={form.password}
                onChange={handleChange}
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

            <label className="field-label" htmlFor="confirm-password">
              Confirm password
            </label>

            <div className="input-wrap">
              <i className="bi bi-lock"></i>

              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                className="login-input"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                <i
                  className={`bi ${showConfirm ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </button>
            </div>

            <label className="terms-check">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
              />
              I agree to the <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </label>

            {error && <p style={{ color: "red", margin: "10px 0" }}>{error}</p>}

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          <p className="login-footer-text">
            Already have an account? <Link to="/login/customer">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
