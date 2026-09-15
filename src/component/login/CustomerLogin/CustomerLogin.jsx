import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./customerLogin.css";

function CustomerLogin() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Customer Login Data:", formData);

        // Backend connect hone ke baad yahan API call hogi
        // navigate("/customer-dashboard");
    };

    return (
        <div className="customer-login-page">

            <div className="customer-login-card">

                <div className="customer-login-header">
                    <h2>Welcome Back</h2>
                    <p>Login to book your local services</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="customer-form-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="customer-form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="customer-login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/customer-forgot-password">
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="customer-login-btn"
                    >
                        Login →
                    </button>

                </form>

                <div className="customer-register-text">
                    Don't have an account?

                    <Link to="/register/customer">
                        Register
                    </Link>
                </div>

                <div className="customer-back">
                    <Link to="/">
                        ← Back to Home
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default CustomerLogin;