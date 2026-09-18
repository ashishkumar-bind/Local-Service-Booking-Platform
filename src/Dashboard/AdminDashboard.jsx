import { useState } from "react";
import './Admin.css';

/* =========================================================
   DUMMY DATA — isko apne backend API response se replace karo
   (GET /admin/providers  ->  yehi shape ka array aana chahiye)
   ========================================================= */
const initialProviderRequests = [
  {
    id: 1,
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    email: "ramesh.kumar@example.com",
    photo: "https://i.pravatar.cc/150?img=12",
    serviceCategory: "Plumber",
    experience: "5 years",
    address: "12, Green Park, New Delhi",
    about: "Experienced plumber specializing in residential repairs and installations.",
    documents: [
      { name: "Aadhaar Card.pdf", url: "#" },
      { name: "Police Verification.pdf", url: "#" },
      { name: "Trade Certificate.pdf", url: "#" },
    ],
    requestedAt: "2026-09-15",
    status: "pending", // pending | approved | rejected
  },
  {
    id: 2,
    name: "Sunita Sharma",
    phone: "+91 91234 56789",
    email: "sunita.sharma@example.com",
    photo: "https://i.pravatar.cc/150?img=32",
    serviceCategory: "Electrician",
    experience: "3 years",
    address: "45, Model Town, Delhi",
    about: "Certified electrician, expert in home wiring and appliance repair.",
    documents: [
      { name: "Aadhaar Card.pdf", url: "#" },
      { name: "ITI Certificate.pdf", url: "#" },
    ],
    requestedAt: "2026-09-17",
    status: "pending",
  },
  {
    id: 3,
    name: "Vikram Singh",
    phone: "+91 99887 66554",
    email: "vikram.singh@example.com",
    photo: "https://i.pravatar.cc/150?img=51",
    serviceCategory: "Carpenter",
    experience: "8 years",
    address: "78, Rohini, Delhi",
    about: "Furniture repair, custom woodwork and interior fittings.",
    documents: [
      { name: "Aadhaar Card.pdf", url: "#" },
      { name: "Police Verification.pdf", url: "#" },
    ],
    requestedAt: "2026-09-10",
    status: "approved",
  },
];

export default function AdminDashboard() {

  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [providerRequests, setProviderRequests] = useState(initialProviderRequests);
  const [selectedProvider, setSelectedProvider] = useState(null); // profile modal ke liye
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar toggle

  const pendingCount = providerRequests.filter(p => p.status === "pending").length;

  // Menu select karte hi mobile par sidebar band ho jaye
  const selectMenu = (menu) => {
    setActiveMenu(menu);
    setSidebarOpen(false);
  };

  /* ============ ACCEPT / REJECT HANDLERS ============ */
  const handleAccept = (id) => {
    // TODO: backend call -> PATCH /admin/providers/:id  { status: "approved" }
    setProviderRequests(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "approved" } : p))
    );
    setSelectedProvider(null);
  };

  const handleReject = (id) => {
    // TODO: backend call -> PATCH /admin/providers/:id  { status: "rejected" }
    setProviderRequests(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "rejected" } : p))
    );
    setSelectedProvider(null);
  };

  return (
    <div className="container-fluid p-0">

      <div className="row g-0 min-vh-100">

        {/* ================= SIDEBAR ================= */}

        {/* Mobile backdrop — sidebar ke bahar tap karne par band ho jaye */}
        {sidebarOpen && (
          <div
            className="admin-sidebar-backdrop d-md-none"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div
          className={`admin-sidebar col-md-3 col-lg-2 bg-white border-end${sidebarOpen ? " admin-sidebar-open" : ""}`}
        >

          <div className="d-flex flex-column h-100 p-3">

            {/* Logo + mobile close button */}
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h3 className="fw-bold mb-0" style={{ color: "#087f5b" }}>
                LocalServe<span className="text-dark">.</span>
              </h3>
              <button
                className="btn btn-light btn-sm d-md-none"
                onClick={() => setSidebarOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* Admin Profile */}
            <div className="p-3 rounded mb-4" style={{ backgroundColor: "#f4fbf8" }}>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center me-2"
                  style={{ width: "45px", height: "45px", backgroundColor: "#e2f5ee", color: "#087f5b" }}
                >
                  <i className="bi bi-person-fill fs-5"></i>
                </div>
                <div>
                  <h6 className="mb-0">Admin</h6>
                  <small className="text-secondary">Administrator</small>
                </div>
              </div>
            </div>

            {/* Sidebar Menu */}
            <div className="nav nav-pills flex-column gap-2">

              <button
                className="nav-link text-start"
                style={{
                  backgroundColor: activeMenu === "Dashboard" ? "#087f5b" : "transparent",
                  color: activeMenu === "Dashboard" ? "white" : "#333"
                }}
                onClick={() => selectMenu("Dashboard")}
              >
                <i className="bi bi-grid me-2"></i>
                Dashboard
              </button>

              <button
                className="nav-link text-start"
                style={{
                  backgroundColor: activeMenu === "Users" ? "#087f5b" : "transparent",
                  color: activeMenu === "Users" ? "white" : "#333"
                }}
                onClick={() => selectMenu("Users")}
              >
                <i className="bi bi-people me-2"></i>
                Manage Users
              </button>

              {/* Providers — badge shows pending request count */}
              <button
                className="nav-link text-start d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: activeMenu === "Providers" ? "#087f5b" : "transparent",
                  color: activeMenu === "Providers" ? "white" : "#333"
                }}
                onClick={() => selectMenu("Providers")}
              >
                <span>
                  <i className="bi bi-person-workspace me-2"></i>
                  Manage Providers
                </span>
                {pendingCount > 0 && (
                  <span className="badge rounded-pill bg-danger">{pendingCount}</span>
                )}
              </button>

              <button
                className="nav-link text-start"
                style={{
                  backgroundColor: activeMenu === "Services" ? "#087f5b" : "transparent",
                  color: activeMenu === "Services" ? "white" : "#333"
                }}
                onClick={() => selectMenu("Services")}
              >
                <i className="bi bi-tools me-2"></i>
                Manage Services
              </button>

              <button
                className="nav-link text-start"
                style={{
                  backgroundColor: activeMenu === "Bookings" ? "#087f5b" : "transparent",
                  color: activeMenu === "Bookings" ? "white" : "#333"
                }}
                onClick={() => selectMenu("Bookings")}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Manage Bookings
              </button>

            </div>

            <button className="btn btn-outline-danger mt-auto">
              <i className="bi bi-box-arrow-left me-2"></i>
              Logout
            </button>

          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#f5f7f6" }}>

          <div className="p-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                {/* Hamburger — sirf mobile par dikhega */}
                <button
                  className="btn btn-light shadow-sm me-3 d-md-none"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="bi bi-list fs-5"></i>
                </button>
                <div>
                  <h2 className="fw-bold mb-1">{activeMenu}</h2>
                  <p className="text-secondary mb-0">Welcome to LocalServe Admin Panel</p>
                </div>
              </div>

              {/* Bell — badge shows pending provider requests */}
              <button
                className="btn btn-light shadow-sm position-relative"
                onClick={() => selectMenu("Providers")}
              >
                <i className="bi bi-bell fs-5"></i>
                {pendingCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {pendingCount}
                  </span>
                )}
              </button>
            </div>

            {/* ================= DASHBOARD ================= */}

            {activeMenu === "Dashboard" && (
              <>
                <div className="row g-4">
                  <StatCard icon="bi-people" value="120" label="Total Users" />
                  <StatCard icon="bi-person-workspace" value="45" label="Service Providers" />
                  <StatCard icon="bi-tools" value="25" label="Services" />
                  <StatCard icon="bi-calendar-check" value="86" label="Total Bookings" />
                </div>

                {pendingCount > 0 && (
                  <div className="card border-0 shadow-sm mt-4">
                    <div className="card-body p-4 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-exclamation-circle fs-3 me-3" style={{ color: "#d9822b" }}></i>
                        <div>
                          <h5 className="mb-1">{pendingCount} new provider request{pendingCount > 1 ? "s" : ""}</h5>
                          <p className="text-secondary mb-0">Review profiles and approve or reject them.</p>
                        </div>
                      </div>
                      <button
                        className="btn text-white"
                        style={{ backgroundColor: "#087f5b" }}
                        onClick={() => selectMenu("Providers")}
                      >
                        Review Now
                      </button>
                    </div>
                  </div>
                )}

                <div className="card border-0 shadow-sm mt-4">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-shield-check fs-1 me-3" style={{ color: "#087f5b" }}></i>
                      <div>
                        <h4>Admin Control Panel</h4>
                        <p className="text-secondary mb-0">
                          Manage users, service providers, services and customer bookings from one place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ================= USERS ================= */}

            {activeMenu === "Users" && (
              <ManagementSection
                title="Manage Users"
                description="Manage registered customers"
                icon="bi-people"
              />
            )}

            {/* ================= PROVIDERS (with request review) ================= */}

            {activeMenu === "Providers" && (
              <ProviderManagement
                providers={providerRequests}
                onView={setSelectedProvider}
              />
            )}

            {/* ================= SERVICES ================= */}

            {activeMenu === "Services" && (
              <ManagementSection
                title="Manage Services"
                description="Manage all available services"
                icon="bi-tools"
              />
            )}

            {/* ================= BOOKINGS ================= */}

            {activeMenu === "Bookings" && (
              <ManagementSection
                title="Manage Bookings"
                description="Manage customer service bookings"
                icon="bi-calendar-check"
              />
            )}

          </div>

        </div>

      </div>

      {/* ================= PROVIDER FULL PROFILE MODAL ================= */}
      {selectedProvider && (
        <ProviderProfileModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}

    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ icon, value, label }) {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div
              className="rounded p-3 me-3"
              style={{ backgroundColor: "#e2f5ee", color: "#087f5b" }}
            >
              <i className={`bi ${icon} fs-4`}></i>
            </div>
            <div>
              <h3 className="mb-0">{value}</h3>
              <small className="text-secondary">{label}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STATUS BADGE ================= */

function StatusBadge({ status }) {
  const map = {
    pending: { text: "Pending", cls: "text-bg-warning" },
    approved: { text: "Approved", cls: "text-bg-success" },
    rejected: { text: "Rejected", cls: "text-bg-danger" },
  };
  const s = map[status] || map.pending;
  return <span className={`badge ${s.cls}`}>{s.text}</span>;
}

/* ================= PROVIDER MANAGEMENT (list + review) ================= */

function ProviderManagement({ providers, onView }) {

  const pending = providers.filter(p => p.status === "pending");
  const others = providers.filter(p => p.status !== "pending");

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div className="rounded p-3 me-3" style={{ backgroundColor: "#e2f5ee", color: "#087f5b" }}>
              <i className="bi bi-person-workspace fs-4"></i>
            </div>
            <div>
              <h4 className="mb-1">Manage Providers</h4>
              <p className="text-secondary mb-0">
                {pending.length > 0
                  ? `${pending.length} request${pending.length > 1 ? "s" : ""} waiting for review`
                  : "No pending requests"}
              </p>
            </div>
          </div>
        </div>

        {/* Pending requests — highlighted first */}
        {pending.length > 0 && (
          <>
            <h6 className="text-secondary text-uppercase small mb-3">Pending Requests</h6>
            <div className="table-responsive mb-4">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Provider</th>
                    <th>Service</th>
                    <th>Requested On</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pending.map(p => (
                    <tr key={p.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={p.photo}
                            alt={p.name}
                            className="rounded-circle me-2"
                            style={{ width: 36, height: 36, objectFit: "cover" }}
                          />
                          {p.name}
                        </div>
                      </td>
                      <td>{p.serviceCategory}</td>
                      <td>{p.requestedAt}</td>
                      <td><StatusBadge status={p.status} /></td>
                      <td>
                        <button
                          className="btn btn-sm text-white"
                          style={{ backgroundColor: "#087f5b" }}
                          onClick={() => onView(p)}
                        >
                          <i className="bi bi-eye me-1"></i>
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Already reviewed providers */}
        <h6 className="text-secondary text-uppercase small mb-3">All Providers</h6>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Provider</th>
                <th>Service</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {others.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="rounded-circle me-2"
                        style={{ width: 36, height: 36, objectFit: "cover" }}
                      />
                      {p.name}
                    </div>
                  </td>
                  <td>{p.serviceCategory}</td>
                  <td><StatusBadge status={p.status} /></td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onView(p)}
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {others.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-secondary py-3">
                    No records yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

/* ================= PROVIDER FULL PROFILE MODAL ================= */

function ProviderProfileModal({ provider, onClose, onAccept, onReject }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded shadow-lg"
        style={{ width: "600px", maxWidth: "92%", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
          <h5 className="mb-0">Provider Profile</h5>
          <button className="btn btn-sm btn-light" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="p-4">

          {/* Photo + basic info */}
          <div className="d-flex align-items-center mb-4">
            <img
              src={provider.photo}
              alt={provider.name}
              className="rounded-circle me-3"
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
            <div>
              <h4 className="mb-1">{provider.name}</h4>
              <p className="text-secondary mb-1">{provider.serviceCategory} · {provider.experience}</p>
              <StatusBadge status={provider.status} />
            </div>
          </div>

          {/* Contact details */}
          <div className="row mb-3">
            <div className="col-6">
              <small className="text-secondary d-block">Phone</small>
              <span>{provider.phone}</span>
            </div>
            <div className="col-6">
              <small className="text-secondary d-block">Email</small>
              <span>{provider.email}</span>
            </div>
          </div>

          <div className="mb-3">
            <small className="text-secondary d-block">Address</small>
            <span>{provider.address}</span>
          </div>

          <div className="mb-4">
            <small className="text-secondary d-block">About</small>
            <span>{provider.about}</span>
          </div>

          {/* Documents */}
          <div className="mb-4">
            <small className="text-secondary d-block mb-2">Submitted Documents</small>
            <div className="d-flex flex-column gap-2">
              {provider.documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-between p-2 border rounded text-decoration-none text-dark"
                >
                  <span>
                    <i className="bi bi-file-earmark-text me-2" style={{ color: "#087f5b" }}></i>
                    {doc.name}
                  </span>
                  <i className="bi bi-box-arrow-up-right text-secondary"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Accept / Reject — only for pending requests */}
          {provider.status === "pending" ? (
            <div className="d-flex gap-2">
              <button
                className="btn text-white flex-grow-1"
                style={{ backgroundColor: "#087f5b" }}
                onClick={() => onAccept(provider.id)}
              >
                <i className="bi bi-check-lg me-2"></i>
                Accept
              </button>
              <button
                className="btn btn-outline-danger flex-grow-1"
                onClick={() => onReject(provider.id)}
              >
                <i className="bi bi-x-lg me-2"></i>
                Reject
              </button>
            </div>
          ) : (
            <div className="text-center text-secondary small">
              This request has already been {provider.status}.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= GENERIC MANAGEMENT SECTION (Users / Services / Bookings) ================= */

function ManagementSection({ title, description, icon }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div className="rounded p-3 me-3" style={{ backgroundColor: "#e2f5ee", color: "#087f5b" }}>
              <i className={`bi ${icon} fs-4`}></i>
            </div>
            <div>
              <h4 className="mb-1">{title}</h4>
              <p className="text-secondary mb-0">{description}</p>
            </div>
          </div>
          <button className="btn text-white" style={{ backgroundColor: "#087f5b" }}>
            <i className="bi bi-plus-lg me-2"></i>
            Add New
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Demo Record</td>
                <td><span className="badge text-bg-success">Active</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-success me-2"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Another Record</td>
                <td><span className="badge text-bg-success">Active</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-success me-2"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}