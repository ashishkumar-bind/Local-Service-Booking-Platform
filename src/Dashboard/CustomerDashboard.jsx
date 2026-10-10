import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./customerDashboard.css";

// Dummy data — baad mein API se replace kar sakte hain
const PROVIDERS_DATA = {
  Electrician: [
    {
      id: 3,
      name: "Ramesh Kumar",
      rating: 4.8,
      experience: "5 yrs",
      price: "₹300/visit",
    },
    {
      id: 4,
      name: "Suresh Yadav",
      rating: 4.5,
      experience: "3 yrs",
      price: "₹250/visit",
    },
  ],
  Plumber: [
    {
      id: 5,
      name: "Vinod Sharma",
      rating: 4.6,
      experience: "7 yrs",
      price: "₹350/visit",
    },
  ],
  Cleaning: [
    {
      id: 6,
      name: "Sunita Devi",
      rating: 4.9,
      experience: "5 yrs",
      price: "₹499/visit",
    },
  ],
  "Car Service": [
    {
      id: 7,
      name: "Ajay Mechanic Works",
      rating: 4.4,
      experience: "8 yrs",
      price: "₹699/visit",
    },
  ],
  AC: [
    {
      id: 8,
      name: "Priya Beauty Studio",
      rating: 4.8,
      experience: "4 yrs",
      price: "₹599/visit",
    },
  ],
  "Bike Repair": [
    {
      id: 1,
      name: "Manoj Tiwari",
      rating: 4.7,
      experience: "6 yrs",
      price: "₹399/visit",
    },
    {
      id: 2,
      name: "Deepak Verma",
      rating: 4.5,
      experience: "4 yrs",
      price: "₹349/visit",
    },
  ],
};

const CATEGORIES = [
  { name: "Electrician", count: 18, price: "₹249", img: "/electrician.jpg" },
  { name: "Plumber", count: 21, price: "249", img: "/Plumber.jpg" },
  { name: "Carpenter", count: 10, price: "₹299", img: "/carpenter.jpg" },
  { name: "Cleaning", count: 32, price: "₹299", img: "/cleaning.jpg" },
  { name: "Car Service", count: 15, price: "399", img: "/CarS.jpeg" },
  { name: "AC Repair", count: 27, price: "₹349", img: "/ACRepaire.jpg" },
  { name: "Painter", count: 12, price: "₹399", img: "/painter.jpg" },
  { name: "Bike Repair", count: 24, price: "₹199", img: "/BikeR.jpg" },
];

const TOTAL_BOOKINGS = 12; // baad mein API se aayega

function CustomerDashboard() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Real logged-in user (localStorage me signup/login ke time save hua tha)
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const displayName = user?.name || "Guest";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prev) =>
      prev === categoryName ? null : categoryName,
    );
  };

  const handleBookNow = (provider) => {
    console.log("Booking:", provider);
    // yahan aap booking modal/page ka logic add kar sakte hain
  };

  return (
    <div className="customer-dashboard">
      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <span>Local</span>
          <strong>(s)</strong>
        </div>

        <div className="customer-info">
          <div className="customer-avatar">{avatarLetter}</div>
          <div>
            <h6>Welcome! {displayName}</h6>
          </div>
        </div>

        <nav className="dashboard-menu">
          <Link to="/my-bookings">
            <i className="bi bi-calendar-check"></i>
            My Bookings
          </Link>
          <Link to="/messages">
            <i className="bi bi-chat-dots"></i>
            Booking Status
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
          <button className="logout-btn" onClick={handleLogout}>
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
              <div className="customer-avatar small">{avatarLetter}</div>
              <div>
                <strong>{displayName}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        <section className="search-section">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search for a service..." />
            <button>Search</button>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h4>Services</h4>
              <p>Choose the service you need</p>
            </div>
            <Link to="/services">
              View All
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className={`category-card card text-bg-dark ${
                  selectedCategory === cat.name ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => handleCategoryClick(cat.name)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCategoryClick(cat.name)
                }
              >
                <img src={cat.img} className="card-img" alt={cat.name} />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h6 className="card-title fw-bold">{cat.name}</h6>
                  <span className="card-text">{cat.count} Providers</span>
                  <p className="card-text mb-0 category-price">
                    From {cat.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Providers list — sirf tab dikhega jab category select ho ===== */}
          {selectedCategory && (
            <div className="providers-inline-list">
              <div className="section-header" style={{ marginTop: "1.5rem" }}>
                <div>
                  <h5>{selectedCategory} Providers</h5>
                  <p>
                    {(PROVIDERS_DATA[selectedCategory] || []).length} providers
                    available
                  </p>
                </div>
                <button
                  className="view-booking"
                  onClick={() => setSelectedCategory(null)}
                >
                  Close
                </button>
              </div>

              {(PROVIDERS_DATA[selectedCategory] || []).length === 0 ? (
                <p>No providers found for this category yet.</p>
              ) : (
                PROVIDERS_DATA[selectedCategory].map((provider) => (
                  <div key={provider.id} className="booking-card">
                    <div className="booking-service-icon">
                      <i className="bi bi-person-badge"></i>
                    </div>

                    <div className="booking-details">
                      <h5>{provider.name}</h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        {provider.rating} rating
                      </p>
                      <p>
                        <i className="bi bi-briefcase"></i>
                        {provider.experience} experience
                      </p>
                    </div>

                    <div className="booking-time">
                      <strong>{provider.price}</strong>
                    </div>

                    <button
                      className="view-booking"
                      onClick={() => handleBookNow(provider)}
                    >
                      Book Now
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
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
            <span>Local</span>
            <strong>(s)</strong>
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
              <span>Dashboard</span>
            </Link>

            <Link to="/services">
              <i className="bi bi-search"></i>
              <span>Find Services</span>
            </Link>

            <Link to="/my-bookings">
              <i className="bi bi-calendar-check"></i>
              <span>My Bookings</span>
            </Link>


            <Link to="/messages">
              <i className="bi bi-chat-dots"></i>
              <span>Messages</span>
            </Link>

            <Link to="/notifications">
              <i className="bi bi-bell"></i>
              <span>Notifications</span>
            </Link>

            <Link to="/profile">
              <i className="bi bi-person"></i>
              <span>My Profile</span>
            </Link>
          </nav>

          {/* MOBILE SIDEBAR BOTTOM */}

          <div className="mobile-sidebar-bottom">
            <Link to="/help">
              <i className="bi bi-question-circle"></i>
              <span>Help & Support</span>
            </Link>

            <button className="logout-btn" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
