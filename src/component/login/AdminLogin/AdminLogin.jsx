import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminlogin.css";

function AdminLogin() {

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

        console.log("Admin Login Data:", formData);

        // Backend connect karne ke baad yahan API call hogi
        navigate("/admin-dashboard");
    };

    return (
        <div className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-header">
                    <h2>Admin Login</h2>
                    <p>Login to manage LocalServe</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="admin-form-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter admin email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="admin-form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="admin-login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/admin-forgot-password">
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="admin-login-btn"
                    >
                        Login as Admin →
                    </button>

                </form>

                <div className="admin-back">
                    <Link to="/">
                        ← Back to Home
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default AdminLogin;