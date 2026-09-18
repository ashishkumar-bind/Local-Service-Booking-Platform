import { useState } from "react";
import "../login/Login.css";
import { useNavigate,Link } from "react-router-dom";

const SERVICE_CATEGORIES = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "AC Repair",
  "Cleaning",
  "Pest Control",
  "Other",
];

export default function ProviderRegister() {
   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    category: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "password" || id === "confirmPassword") {
      const newPassword = id === "password" ? value : formData.password;
      const newConfirm =
        id === "confirmPassword" ? value : formData.confirmPassword;

      if (newConfirm && newPassword !== newConfirm) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    setPasswordError("");
    console.log("Registering provider:", formData);
    navigate("/Dashboard/Provider");
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
          <h2>Grow your business with LocalServe.</h2>
          <p>
            Manage bookings, get discovered by customers nearby, and get paid on
            time.
          </p>
        </div>
      </div>

      {/* ===== Form panel ===== */}
      <div className="login-form-panel d-flex align-items-center justify-content-center">
        <div className="login-card">
          <a href="/" className="login-logo login-logo-mobile d-lg-none">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </a>

          <h1 className="login-title">Become a Provider</h1>
          <p className="login-subtitle">
            Register your service and start getting bookings from customers near
            you.
          </p>

          <form onSubmit={handleSubmit} noValidate>
           
            <label className="field-label" htmlFor="fullName">
              Your full name
            </label>
            <div className="input-wrap">
              <i className="bi bi-person"></i>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
                className="login-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <label className="field-label" htmlFor="email">
              Email address
            </label>
            <div className="input-wrap">
              <i className="bi bi-envelope"></i>
              <input
                id="email"
                type="email"
                placeholder="you@business.com"
                className="login-input"
                value={formData.email}
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
                type="tel"
                placeholder="10-digit mobile number"
                className="login-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <label className="field-label" htmlFor="category">
              Service category
            </label>
            <div className="input-wrap">
              <i className="bi bi-tools"></i>
              <select
                id="category"
                className="login-input"
                value={formData.category}
                onChange={handleChange}
                required
              >
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

            <label className="field-label" htmlFor="city">
              City / Service area
            </label>
            <div className="input-wrap">
              <i className="bi bi-geo-alt"></i>
              <input
                id="city"
                type="text"
                placeholder="e.g. Delhi NCR"
                className="login-input"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <label className="field-label" htmlFor="password">
              Create password
            </label>
            <div className="input-wrap">
              <i className="bi bi-lock"></i>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                className="login-input"
                value={formData.password}
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

            <label className="field-label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <div className="input-wrap">
              <i className="bi bi-lock"></i>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                className="login-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowConfirmPassword((s) => !s)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                <i
                  className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </button>
            </div>

            {passwordError && (
              <p
                className="field-error"
                style={{
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "-0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                {passwordError}
              </p>
            )}

            <div className="login-row">
              <label className="remember-me">
                <input type="checkbox" required />I agree to the{" "}
                <a href="/terms">Terms &amp; Conditions</a>
              </label>
            </div>

            <button type="submit" className="login-submit">
              Register as Provider
            </button>
          </form>

          <p className="login-footer-text">
            Already a registered provider?{" "}
            <Link to="/login/provider">Log in</Link>
          </p>

          <p className="login-footer-text">
            Looking to book a service instead?{" "}
            <Link to="/register">Register as a Customer</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
