import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./serviceProviderLogin.css";

function ServiceProviderLogin() {

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

        console.log("Service Provider Login Data:", formData);

        // Backend connect hone ke baad API call yahan hogi
        // navigate("/service-provider-dashboard");
    };

    return (
        <div className="provider-login-page">

            <div className="provider-login-card">

                <div className="provider-login-header">
                    <h2>Welcome Back</h2>
                    <p>Login to manage your services</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="provider-form-group">
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

                    <div className="provider-form-group">
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

                    <div className="provider-login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/service-provider-forgot-password">
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="provider-login-btn"
                    >
                        Login →
                    </button>

                </form>

                <div className="provider-register-text">
                    Don't have a provider account?

                    <Link to="/register/service-provider">
                        Register
                    </Link>
                </div>

                <div className="provider-back">
                    <Link to="/">
                        ← Back to Home
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ServiceProviderLogin;