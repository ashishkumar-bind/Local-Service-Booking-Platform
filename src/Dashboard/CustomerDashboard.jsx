import React from "react";
import { Link } from "react-router-dom";
import "./customerDashboard.css";

function CustomerDashboard() {
  return (
    <div className="customer-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <span>Local</span><strong>(s)</strong>
        </div>

        <div className="customer-info">
          <div className="customer-avatar">
            S
          </div>

          <div>
            <h6>Welcome, Suhail</h6>
            <small>Customer</small>
          </div>
        </div>

        <nav className="dashboard-menu">

          <Link to="/customer-dashboard" className="active">
            <i className="bi bi-grid"></i>
            Dashboard
          </Link>

          <Link to="/services">
            <i className="bi bi-search"></i>
            Find Services
          </Link>

          <Link to="/my-bookings">
            <i className="bi bi-calendar-check"></i>
            My Bookings
          </Link>

          <Link to="/favorites">
            <i className="bi bi-heart"></i>
            Favorites
          </Link>

          <Link to="/messages">
            <i className="bi bi-chat-dots"></i>
            Messages
          </Link>

          <Link to="/notifications">
            <i className="bi bi-bell"></i>
            Notifications
          </Link>

          <Link to="/profile">
            <i className="bi bi-person"></i>
            My Profile
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <Link to="/help">
            <i className="bi bi-question-circle"></i>
            Help & Support
          </Link>

          <button className="logout-btn">
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-main">

        {/* TOP NAVBAR */}

        <div className="dashboard-topbar">

          <button
            className="btn mobile-menu-btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <i className="bi bi-list"></i>
          </button>

          <div>
            <h4>Customer Dashboard</h4>
            <p>Manage your services and bookings</p>
          </div>

          <div className="topbar-right">

            <button className="notification-btn">
              <i className="bi bi-bell"></i>
              <span>2</span>
            </button>

            <div className="top-profile">
              <div className="customer-avatar small">
                S
              </div>

              <div>
                <strong>Suhail</strong>
                <small>Customer</small>
              </div>
            </div>

          </div>

        </div>


        {/* ================= WELCOME ================= */}

        <section className="welcome-card">

          <div>
            <span className="welcome-label">
              Welcome back 👋
            </span>

            <h2>What service do you need today?</h2>

            <p>
              Find trusted local service providers near you.
            </p>

            <Link to="/services" className="btn browse-btn">
              Browse Services
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="welcome-icon">
            <i className="bi bi-house-check"></i>
          </div>

        </section>


        {/* ================= SEARCH ================= */}

        <section className="search-section">

          <div className="search-box">

            <i className="bi bi-search"></i>

            <input
              type="text"
              placeholder="Search for a service..."
            />

            <button>
              Search
            </button>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon">
              <i className="bi bi-calendar-check"></i>
            </div>

            <div>
              <span>Total Bookings</span>
              <h3>12</h3>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              <i className="bi bi-clock-history"></i>
            </div>

            <div>
              <span>Upcoming</span>
              <h3>2</h3>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              <i className="bi bi-check-circle"></i>
            </div>

            <div>
              <span>Completed</span>
              <h3>9</h3>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              <i className="bi bi-heart"></i>
            </div>

            <div>
              <span>Favorites</span>
              <h3>5</h3>
            </div>

          </div>

        </section>


        {/* ================= CATEGORIES ================= */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <h4>Popular Categories</h4>
              <p>Choose the service you need</p>
            </div>

            <Link to="/services">
              View All
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>


          <div className="category-grid">

            <div className="category-card">
              <div>
                <i className="bi bi-tools"></i>
              </div>
              <h6>Home Repair</h6>
              <span>24 Providers</span>
            </div>


            <div className="category-card">
              <div>
                <i className="bi bi-lightning-charge"></i>
              </div>
              <h6>Electrician</h6>
              <span>18 Providers</span>
            </div>


            <div className="category-card">
              <div>
                <i className="bi bi-droplet"></i>
              </div>
              <h6>Plumber</h6>
              <span>21 Providers</span>
            </div>


            <div className="category-card">
              <div>
                <i className="bi bi-house"></i>
              </div>
              <h6>Cleaning</h6>
              <span>32 Providers</span>
            </div>


            <div className="category-card">
              <div>
                <i className="bi bi-car-front"></i>
              </div>
              <h6>Car Service</h6>
              <span>15 Providers</span>
            </div>


            <div className="category-card">
              <div>
                <i className="bi bi-scissors"></i>
              </div>
              <h6>Salon</h6>
              <span>27 Providers</span>
            </div>

          </div>

        </section>


        {/* ================= UPCOMING BOOKINGS ================= */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <h4>Upcoming Bookings</h4>
              <p>Your scheduled services</p>
            </div>

            <Link to="/my-bookings">
              View All
            </Link>

          </div>


          <div className="booking-card">

            <div className="booking-service-icon">
              <i className="bi bi-lightning-charge"></i>
            </div>

            <div className="booking-details">

              <h5>Electrical Repair</h5>

              <p>
                <i className="bi bi-person"></i>
                Raj Kumar
              </p>

              <p>
                <i className="bi bi-calendar"></i>
                18 September 2026
              </p>

            </div>

            <div className="booking-time">

              <strong>10:30 AM</strong>

              <span className="status-badge">
                Confirmed
              </span>

            </div>

            <button className="view-booking">
              View
            </button>

          </div>


          <div className="booking-card">

            <div className="booking-service-icon">
              <i className="bi bi-droplet"></i>
            </div>

            <div className="booking-details">

              <h5>Plumbing Service</h5>

              <p>
                <i className="bi bi-person"></i>
                Amit Sharma
              </p>

              <p>
                <i className="bi bi-calendar"></i>
                21 September 2026
              </p>

            </div>

            <div className="booking-time">

              <strong>02:00 PM</strong>

              <span className="pending-badge">
                Pending
              </span>

            </div>

            <button className="view-booking">
              View
            </button>

          </div>

        </section>


        {/* ================= RECOMMENDED ================= */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <h4>Recommended Services</h4>
              <p>Popular services near you</p>
            </div>

            <Link to="/services">
              Explore More
            </Link>

          </div>


          <div className="service-grid">

            <div className="service-card">

              <div className="service-image">
                <i className="bi bi-tools"></i>
              </div>

              <div className="service-content">

                <span className="service-category">
                  Home Repair
                </span>

                <h5>Home Appliance Repair</h5>

                <div className="rating">
                  ★★★★★
                  <span>4.8</span>
                </div>

                <div className="service-bottom">

                  <strong>From ₹299</strong>

                  <button>
                    Book Now
                  </button>

                </div>

              </div>

            </div>


            <div className="service-card">

              <div className="service-image">
                <i className="bi bi-house-check"></i>
              </div>

              <div className="service-content">

                <span className="service-category">
                  Cleaning
                </span>

                <h5>Home Deep Cleaning</h5>

                <div className="rating">
                  ★★★★★
                  <span>4.7</span>
                </div>

                <div className="service-bottom">

                  <strong>From ₹499</strong>

                  <button>
                    Book Now
                  </button>

                </div>

              </div>

            </div>


            <div className="service-card">

              <div className="service-image">
                <i className="bi bi-car-front"></i>
              </div>

              <div className="service-content">

                <span className="service-category">
                  Vehicle
                </span>

                <h5>Car Service</h5>

                <div className="rating">
                  ★★★★★
                  <span>4.9</span>
                </div>

                <div className="service-bottom">

                  <strong>From ₹699</strong>

                  <button>
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>


      </main>


      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className="offcanvas offcanvas-start mobile-sidebar"
        tabIndex="-1"
        id="mobileSidebar"
      >

        <div className="offcanvas-header">

          <div className="dashboard-logo">
            <span>Local</span><strong>(s)</strong>
          </div>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <div className="offcanvas-body">

          <nav className="dashboard-menu">

            <Link to="/customer-dashboard">
              <i className="bi bi-grid"></i>
              Dashboard
            </Link>

            <Link to="/services">
              <i className="bi bi-search"></i>
              Find Services
            </Link>

            <Link to="/my-bookings">
              <i className="bi bi-calendar-check"></i>
              My Bookings
            </Link>

            <Link to="/favorites">
              <i className="bi bi-heart"></i>
              Favorites
            </Link>

            <Link to="/messages">
              <i className="bi bi-chat-dots"></i>
              Messages
            </Link>

            <Link to="/notifications">
              <i className="bi bi-bell"></i>
              Notifications
            </Link>

            <Link to="/profile">
              <i className="bi bi-person"></i>
              My Profile
            </Link>

          </nav>

        </div>

      </div>

    </div>
  );
}

export default CustomerDashboard;