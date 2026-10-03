import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Electrician",
    price: "₹199",
    img: "/electrician.jpg",
  },
  {
    title: "Plumber",
    price: "₹249",
    img: "/Plumber.jpg",
  },
  {
    title: "Carpenter",
    price: "₹299",
    img: "/carpenter.jpg",
  },
  {
    title: "Cleaning",
    price: "₹299",
    img: "/cleaning.jpg",
  },
  { title: "Painter", price: "₹399", img: "/painter.jpg" },
  { title: "AC Repair", price: "₹349", img: "/ACRepaire.jpg" },
];

export default function Cards() {
  return (
    // <!-- card section----------------- -->
    <section id="services">
      <div className="container mt-5">
        <h2 className="fw-bold">Our Services</h2>

        <p>
          Choose from a wide range of services and get the best professionals
          near you.
        </p>
      </div>

      <div className="container mt-3">
        <div className="row">
          {services.map((s, i) => (
            <div className="col" key={i}>
              <div className="card text-bg-dark service-card-overlay">
                <img src={s.img} className="card-img" alt={s.title} />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title fw-bold">{s.title}</h5>
                  <p className="card-text mb-0">From {s.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="get-started-wrapper pt-0">
          <h3>Need a service?</h3>
          <p>
            Register with us and get trusted professionals at your doorstep.
          </p>
          <Link to="/register/customer" className="btn started-btn">
            Get Started
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
