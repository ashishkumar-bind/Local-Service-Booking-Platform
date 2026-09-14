import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Electrician",
    price: "₹199",
    icon: "bi-lightning-charge-fill",
    color: "",
  },
  {
    title: "Plumber",
    price: "₹249",
    icon: "bi-wrench-adjustable",
    color: "text-primary fs-5",
  },
  {
    title: "Carpenter",
    price: "₹299",
    icon: "bi-hammer",
    color: "text-danger",
  },
  {
    title: "Cleaning",
    price: "₹299",
    icon: "bi-bucket",
    color: "text-success",
  },
  { title: "Painter", price: "₹399", icon: "bi-brush", color: "text-warning" },
  { title: "AC Repair", price: "₹349", icon: "bi-snow", color: "text-success" },
];

export default function Cards() {
  return (
    // <!-- card section----------------- -->
    <section id="services">
      <div className="container mt-5">
        <p className="text-success border border-success-subtle rounded-pill px-2 py-0 d-inline-block fw-bold">
          OUR SERVICES
        </p>
        <h2 className="fw-bold">Popular Services</h2>

        <p>
          Choose from a wide range of services and get the best professionals
          near you.
        </p>
      </div>

      <div className="container mt-3">
        <div className="row gx-*">
          {services.map((s, i) => (
            <div className="col" key={i}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${s.icon} ${s.color}`}></i>
                </div>
                <div className="service-title fw-bold p-2">{s.title}</div>
                <div className="service-price fw-bold">From {s.price}</div>
                {/* <button className="btn btn-success fw-bold">
                  <i className="bi bi-arrow-right"></i>
                  
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="get-started-wrapper">
          <h3>Need a service?</h3>
          <p>
            Register with us and get trusted professionals at your doorstep.
          </p>

          <Link to="/register" className="btn started-btn">
            Get Started
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
