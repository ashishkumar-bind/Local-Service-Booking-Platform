import { useState } from "react";
import { Link } from "react-router-dom";
import "./Provider.css";

const STATS = [
  { label: "Total Bookings", value: 128, icon: "bi-calendar-check", color: "primary" },
  { label: "Pending Requests", value: 6, icon: "bi-hourglass-split", color: "warning" },
  { label: "Completed Jobs", value: 112, icon: "bi-check-circle", color: "success" },
  { label: "Earnings (This Month)", value: "₹42,500", icon: "bi-currency-rupee", color: "info" },
];

/* =========================================================
   DUMMY BOOKING DATA — isko apne backend API response se replace karo
   (GET /provider/bookings  ->  yehi shape ka array aana chahiye)
   Customer jab bhi koi service book karega, backend yahi shape
   ka naya record "status: Pending" ke saath bhejega.
   ========================================================= */
const initialBookings = [
  {
    id: 1,
    customer: "Rahul Sharma",
    phone: "+91 98765 43210",
    address: "B-45, Lajpat Nagar, New Delhi",
    service: "AC Repair",
    date: "18 Sep 2026",
    time: "11:00 AM",
    notes: "Split AC not cooling, made a strange noise yesterday.",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Priya Verma",
    phone: "+91 91234 56789",
    address: "22, Model Town, Delhi",
    service: "Electrical Wiring",
    date: "17 Sep 2026",
    time: "3:30 PM",
    notes: "New wiring needed for one bedroom, discussed over call.",
    status: "Confirmed",
  },
  {
    id: 3,
    customer: "Amit Singh",
    phone: "+91 99887 66554",
    address: "78, Rohini Sector 9, Delhi",
    service: "Plumbing",
    date: "15 Sep 2026",
    time: "10:00 AM",
    notes: "Kitchen sink leakage, fixed already.",
    status: "Completed",
  },
  {
    id: 4,
    customer: "Neha Gupta",
    phone: "+91 90012 34567",
    address: "14, Saket, New Delhi",
    service: "AC Installation",
    date: "19 Sep 2026",
    time: "1:00 PM",
    notes: "New split AC, need installation with stabilizer.",
    status: "Pending",
  },
];

/* =========================================================
   DUMMY PROVIDER PROFILE — isko apne backend se replace karo
   (GET /provider/profile  ->  yehi shape ka object aana chahiye)
   Naya provider sirf signup ke basic fields (name/phone/email)
   ke saath start hota hai — baaki profile complete karna padta hai.
   ========================================================= */
const initialProfile = {
  name: "Sharma Electricals",
  phone: "+91 98765 43210",
  email: "sharma.electricals@example.com",
  photo: "",
  serviceCategory: "",
  experience: "",
  address: "",
  about: "",
  documents: [],
};

// Profile "complete" tabhi mana jayega jab ye saare fields bhare ho
const REQUIRED_PROFILE_FIELDS = [
  "name",
  "phone",
  "email",
  "serviceCategory",
  "experience",
  "address",
];

// Documents me sirf ye 3 ID proof types allow honge, har type sirf ek baar
const ALLOWED_DOCUMENT_TYPES = ["Aadhaar Card", "PAN Card", "Passport"];

// File format bhi restrict — sirf image ya PDF, koi bhi random file nahi
const ALLOWED_DOCUMENT_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];
const MAX_DOCUMENT_SIZE_MB = 5;

const isProfileComplete = (p) =>
  REQUIRED_PROFILE_FIELDS.every((field) => p[field] && p[field].trim() !== "") &&
  p.documents.length > 0;

const statusBadge = (status) => {
  const map = {
    Pending: "bg-warning text-dark",
    Confirmed: "bg-primary",
    Completed: "bg-success",
    Cancelled: "bg-danger",
  };
  return map[status] || "bg-secondary";
};

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [profile, setProfile] = useState(initialProfile);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar toggle

  const pendingBookings = bookings.filter((b) => b.status === "Pending");
  const pendingCount = pendingBookings.length;
  const profileComplete = isProfileComplete(profile);

  // Tab select karte hi mobile par sidebar band ho jaye
  // Bookings/Services tab tabhi khulenge jab profile complete ho
  const selectTab = (tab) => {
    if (!profileComplete && (tab === "bookings" || tab === "services")) {
      setActiveTab("profile");
      setSidebarOpen(false);
      return;
    }
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  /* ============ ACCEPT / REJECT HANDLERS ============ */
  const handleAccept = (id) => {
    // Safety guard — profile incomplete hone par booking accept na ho
    // (backend par bhi yehi check zaroor lagana: profile.isComplete verify karke hi accept allow karo)
    if (!profileComplete) return;
    // TODO: backend call -> PATCH /provider/bookings/:id  { status: "Confirmed" }
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "Confirmed" } : b))
    );
    setSelectedBooking(null);
  };

  const handleReject = (id) => {
    if (!profileComplete) return;
    // TODO: backend call -> PATCH /provider/bookings/:id  { status: "Cancelled" }
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b))
    );
    setSelectedBooking(null);
  };

  return (
    <div className="provider-dashboard">
      {/* ===== Top bar ===== */}
      <header className="dashboard-topbar d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {/* Hamburger — sirf mobile par dikhega */}
          <button
            className="icon-btn mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>

          <Link to="/" className="login-logo">
            <i className="bi bi-geo-alt-fill"></i> LocalServe
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            className="icon-btn position-relative"
            aria-label="Notifications"
            onClick={() => selectTab("bookings")}
          >
            <i className="bi bi-bell"></i>
            {pendingCount > 0 && (
              <span className="notif-dot">{pendingCount}</span>
            )}
          </button>
          <div className="provider-profile-chip">
            <i className="bi bi-person-circle"></i>
            <span>Sharma Electricals</span>
          </div>
        </div>
      </header>

      <div className="dashboard-body d-flex">
        {/* Mobile backdrop — sidebar ke bahar tap karne par band ho jaye */}
        {sidebarOpen && (
          <div
            className="dashboard-sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* ===== Sidebar ===== */}
        <aside
          className={`dashboard-sidebar${sidebarOpen ? " dashboard-sidebar-open" : ""}`}
        >
          <button
            className="icon-btn sidebar-close-btn"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <nav className="dashboard-nav">
            <button
              className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => selectTab("overview")}
            >
              <i className="bi bi-grid-1x2"></i> Overview
            </button>
            <button
              className={`nav-item ${activeTab === "bookings" ? "active" : ""}${!profileComplete ? " nav-item-locked" : ""}`}
              onClick={() => selectTab("bookings")}
            >
              <i className="bi bi-calendar-check"></i> Bookings
              {profileComplete && pendingCount > 0 && (
                <span className="nav-badge">{pendingCount}</span>
              )}
              {!profileComplete && <i className="bi bi-lock-fill nav-lock-icon"></i>}
            </button>
            <button
              className={`nav-item ${activeTab === "services" ? "active" : ""}${!profileComplete ? " nav-item-locked" : ""}`}
              onClick={() => selectTab("services")}
            >
              <i className="bi bi-tools"></i> My Services
              {!profileComplete && <i className="bi bi-lock-fill nav-lock-icon"></i>}
            </button>
            <button
              className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => selectTab("profile")}
            >
              <i className="bi bi-person"></i> Profile
            </button>
          </nav>

          <Link to="/login/provider" className="nav-item logout-item">
            <i className="bi bi-box-arrow-right"></i> Log out
          </Link>
        </aside>

        {/* ===== Main content ===== */}
        <main className="dashboard-main">
          {activeTab === "overview" && (
            <>
              <h1 className="dashboard-heading">Welcome back, Provider 👋</h1>
              <p className="dashboard-subtext">
                Here's what's happening with your services today.
              </p>

              {/* Stats cards */}
              <div className="stats-grid">
                {STATS.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <div className={`stat-icon bg-${stat.color}`}>
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Complete profile banner — jab tak profile complete na ho */}
              {!profileComplete && (
                <div className="dashboard-card complete-profile-banner">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-person-exclamation complete-profile-icon"></i>
                      <div>
                        <h2 className="section-title mb-1">Complete your profile to get started</h2>
                        <p className="dashboard-subtext mb-0">
                          Until your profile is complete, you will not be able to accept bookings or manage services.
                        </p>
                      </div>
                    </div>
                    <button className="btn-accept" onClick={() => selectTab("profile")}>
                      Complete Profile
                    </button>
                  </div>
                </div>
              )}

              {/* New requests banner */}
              {profileComplete && pendingCount > 0 && (
                <div className="dashboard-card new-request-banner">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-exclamation-circle new-request-icon"></i>
                      <div>
                        <h2 className="section-title mb-1">
                          {pendingCount} new booking request{pendingCount > 1 ? "s" : ""}
                        </h2>
                        <p className="dashboard-subtext mb-0">
                          Review details and accept or reject them.
                        </p>
                      </div>
                    </div>
                    <button className="btn-link" onClick={() => selectTab("bookings")}>
                      Review Now
                    </button>
                  </div>
                </div>
              )}

              {/* Recent Bookings table */}
              <div className="dashboard-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h2 className="section-title">Recent Bookings</h2>
                  <button className="btn-link" onClick={() => selectTab("bookings")}>
                    View all
                  </button>
                </div>

                <BookingsTable
                  bookings={bookings.slice(0, 5)}
                  onView={setSelectedBooking}
                />
              </div>
            </>
          )}

          {activeTab === "bookings" && (
            profileComplete ? (
            <>
              <h1 className="dashboard-heading">Bookings</h1>
              <p className="dashboard-subtext">
                {pendingCount > 0
                  ? `${pendingCount} request${pendingCount > 1 ? "s" : ""} waiting for your response`
                  : "No pending requests right now"}
              </p>

              {/* Pending requests — full details, highlighted */}
              {pendingBookings.length > 0 && (
                <div className="dashboard-card">
                  <h2 className="section-title mb-3">New Requests</h2>

                  <div className="request-list">
                    {pendingBookings.map((b) => (
                      <div className="request-item" key={b.id}>
                        <div className="request-item-main">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3 className="request-customer">{b.customer}</h3>
                            <span className={`badge ${statusBadge(b.status)}`}>
                              {b.status}
                            </span>
                          </div>
                          <p className="request-line">
                            <i className="bi bi-tools"></i> {b.service}
                          </p>
                          <p className="request-line">
                            <i className="bi bi-calendar-event"></i> {b.date} · {b.time}
                          </p>
                          <p className="request-line">
                            <i className="bi bi-geo-alt"></i> {b.address}
                          </p>
                          {b.notes && (
                            <p className="request-notes">"{b.notes}"</p>
                          )}
                        </div>

                        <div className="request-item-actions">
                          <button
                            className="btn-action-outline"
                            onClick={() => setSelectedBooking(b)}
                          >
                            <i className="bi bi-eye"></i> View
                          </button>
                          <button
                            className="btn-accept"
                            onClick={() => handleAccept(b.id)}
                          >
                            <i className="bi bi-check-lg"></i> Accept
                          </button>
                          <button
                            className="btn-reject"
                            onClick={() => handleReject(b.id)}
                          >
                            <i className="bi bi-x-lg"></i> Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All bookings table */}
              <div className="dashboard-card">
                <h2 className="section-title mb-3">All Bookings</h2>
                <BookingsTable bookings={bookings} onView={setSelectedBooking} />
              </div>
            </>
            ) : (
              <ProfileRequiredNotice
                heading="Complete your profile to view bookings"
                text="Customers can only book providers with complete profiles. Please complete your profile to receive bookings."
                onGoToProfile={() => selectTab("profile")}
              />
            )
          )}

          {activeTab === "services" && (
            profileComplete ? (
            <>
              <h1 className="dashboard-heading">My Services</h1>
              <p className="dashboard-subtext">Manage the services you offer.</p>
              <div className="dashboard-card">
                <p className="dashboard-subtext mb-0">The services list will appear here.</p>
              </div>
            </>
            ) : (
              <ProfileRequiredNotice
                heading="Complete your profile to manage services"
                text="Please complete your profile first to add services."
                onGoToProfile={() => selectTab("profile")}
              />
            )
          )}

          {activeTab === "profile" && (
            <>
              <h1 className="dashboard-heading">My Profile</h1>
              <p className="dashboard-subtext">
                These details will be visible to customers and the admin. Keep them accurate and complete.
              </p>

              {!profileComplete && (
                <div className="profile-incomplete-note">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                  Your profile is incomplete. Until you provide all the required details (name, phone, email, 
                  service category, experience, address, and at least 1 document) are provided, otherwise you cannot accept bookings.
                </div>
              )}

              <ProviderProfileForm profile={profile} onSave={setProfile} />
            </>
          )}
        </main>
      </div>

      {/* ===== Full Booking Detail Modal ===== */}
      {selectedBooking && (
        <BookingDetailModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
}

/* ================= PROFILE REQUIRED NOTICE ================= */

function ProfileRequiredNotice({ heading, text, onGoToProfile }) {
  return (
    <div className="dashboard-card profile-required-notice">
      <i className="bi bi-lock-fill profile-required-icon"></i>
      <h2 className="section-title mt-3 mb-1">{heading}</h2>
      <p className="dashboard-subtext mb-3">{text}</p>
      <button className="btn-accept" onClick={onGoToProfile}>
        Complete Profile
      </button>
    </div>
  );
}

/* ================= BOOKINGS TABLE ================= */

function BookingsTable({ bookings, onView }) {
  return (
    <div className="table-responsive">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.customer}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>
                <span className={`badge ${statusBadge(b.status)}`}>
                  {b.status}
                </span>
              </td>
              <td>
                <button className="btn-action" onClick={() => onView(b)}>
                  <i className="bi bi-eye"></i>
                </button>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center dashboard-subtext py-3">
                No bookings yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

/* ================= FULL BOOKING DETAIL MODAL ================= */

function BookingDetailModal({ booking, onClose, onAccept, onReject }) {
  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="booking-modal-header">
          <h2 className="section-title mb-0">Booking Request</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="booking-modal-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="request-customer mb-0">{booking.customer}</h3>
            <span className={`badge ${statusBadge(booking.status)}`}>
              {booking.status}
            </span>
          </div>

          <div className="booking-detail-grid">
            <div>
              <small className="dashboard-subtext d-block">Service</small>
              <span>{booking.service}</span>
            </div>
            <div>
              <small className="dashboard-subtext d-block">Phone</small>
              <span>{booking.phone}</span>
            </div>
            <div>
              <small className="dashboard-subtext d-block">Date & Time</small>
              <span>{booking.date} · {booking.time}</span>
            </div>
            <div>
              <small className="dashboard-subtext d-block">Address</small>
              <span>{booking.address}</span>
            </div>
          </div>

          {booking.notes && (
            <div className="mt-3">
              <small className="dashboard-subtext d-block">Customer Notes</small>
              <p className="request-notes mb-0">"{booking.notes}"</p>
            </div>
          )}

          {booking.status === "Pending" ? (
            <div className="d-flex gap-2 mt-4">
              <button
                className="btn-accept flex-grow-1"
                onClick={() => onAccept(booking.id)}
              >
                <i className="bi bi-check-lg"></i> Accept
              </button>
              <button
                className="btn-reject flex-grow-1"
                onClick={() => onReject(booking.id)}
              >
                <i className="bi bi-x-lg"></i> Reject
              </button>
            </div>
          ) : (
            <p className="text-center dashboard-subtext mt-4 mb-0">
              This booking is already {booking.status.toLowerCase()}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= PROVIDER PROFILE FORM (Create / Edit) ================= */

function ProviderProfileForm({ profile, onSave }) {
  const [editing, setEditing] = useState(!isProfileComplete(profile));
  const [form, setForm] = useState(profile);
  const [photoPreview, setPhotoPreview] = useState(profile.photo);
  const [docError, setDocError] = useState("");

  const uploadedDocTypes = form.documents.map((d) => d.type);
  const availableDocTypes = ALLOWED_DOCUMENT_TYPES.filter(
    (t) => !uploadedDocTypes.includes(t)
  );
  const [docType, setDocType] = useState(availableDocTypes[0] || "");

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // TODO: backend call -> upload photo, jaise POST /provider/profile/photo (FormData)
    // filhaal local preview ke liye object URL bana rahe hain
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
    updateField("photo", previewUrl);
  };

  const handleDocUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDocError("");

    // Sirf Aadhaar / PAN / Passport allowed — koi dusra type nahi
    if (!ALLOWED_DOCUMENT_TYPES.includes(docType)) {
      setDocError("You can only upload an Aadhaar Card, PAN Card, or Passport.");
      e.target.value = "";
      return;
    }

    // Ek type sirf ek baar upload ho sakta hai
    if (uploadedDocTypes.includes(docType)) {
      setDocError(`${docType} It is already uploaded. Remove that first`);
      e.target.value = "";
      return;
    }

    // Sirf image ya PDF file allow — koi bhi random file type nahi
    if (!ALLOWED_DOCUMENT_FILE_TYPES.includes(file.type)) {
      setDocError("Only JPG, PNG, or PDF formats are accepted.");
      e.target.value = "";
      return;
    }

    // File size limit
    if (file.size > MAX_DOCUMENT_SIZE_MB * 1024 * 1024) {
      setDocError(`File size ${MAX_DOCUMENT_SIZE_MB}It should be less than MB.`);
      e.target.value = "";
      return;
    }

    // TODO: backend call -> POST /provider/profile/documents (FormData: type, file)
    setForm((prev) => ({
      ...prev,
      documents: [...prev.documents, { type: docType, name: file.name }],
    }));

    const remaining = availableDocTypes.filter((t) => t !== docType);
    setDocType(remaining[0] || "");
    e.target.value = "";
  };

  const removeDoc = (index) => {
    const removedType = form.documents[index]?.type;
    setForm((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
    setDocError("");
    if (removedType && !docType) setDocType(removedType);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: backend call -> PUT /provider/profile  with form data
    onSave(form);
    setEditing(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setPhotoPreview(profile.photo);
    setEditing(!isProfileComplete(profile));
  };

  /* ============ VIEW MODE ============ */
  if (!editing) {
    return (
      <div className="dashboard-card profile-card">
        <div className="profile-view-header">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="profile-photo" />
          ) : (
            <div className="profile-photo-placeholder">
              <i className="bi bi-person-fill"></i>
            </div>
          )}
          <div>
            <h2 className="section-title mb-1">{profile.name}</h2>
            <p className="dashboard-subtext mb-0">
              {profile.serviceCategory || "Service category not set"} · {profile.experience || "Experience not set"}
            </p>
          </div>
          <button className="btn-accept ms-auto" onClick={() => setEditing(true)}>
            <i className="bi bi-pencil"></i> Edit Profile
          </button>
        </div>

        <div className="booking-detail-grid mt-4">
          <div>
            <small className="dashboard-subtext d-block">Phone</small>
            <span>{profile.phone}</span>
          </div>
          <div>
            <small className="dashboard-subtext d-block">Email</small>
            <span>{profile.email}</span>
          </div>
          <div>
            <small className="dashboard-subtext d-block">Service Category</small>
            <span>{profile.serviceCategory}</span>
          </div>
          <div>
            <small className="dashboard-subtext d-block">Experience</small>
            <span>{profile.experience}</span>
          </div>
        </div>

        <div className="mt-3">
          <small className="dashboard-subtext d-block">Address</small>
          <span>{profile.address}</span>
        </div>

        <div className="mt-3">
          <small className="dashboard-subtext d-block">About</small>
          <span>{profile.about}</span>
        </div>

        <div className="mt-3">
          <small className="dashboard-subtext d-block mb-2">Identity Documents</small>
          <div className="d-flex flex-column gap-2">
            {profile.documents.length === 0 && (
              <span className="dashboard-subtext">No document has been uploaded.</span>
            )}
            {profile.documents.map((doc, i) => (
              <div key={i} className="doc-row">
                <i className="bi bi-file-earmark-text"></i>
                <span><strong>{doc.type}</strong> — {doc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ============ EDIT / CREATE MODE ============ */
  return (
    <form className="dashboard-card profile-card" onSubmit={handleSave}>
      <div className="profile-view-header">
        <div className="profile-photo-upload">
          {photoPreview ? (
            <img src={photoPreview} alt="Profile" className="profile-photo" />
          ) : (
            <div className="profile-photo-placeholder">
              <i className="bi bi-person-fill"></i>
            </div>
          )}
          <label className="photo-upload-btn">
            <i className="bi bi-camera"></i>
            <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
          </label>
        </div>
        <div>
          <h2 className="section-title mb-1">Edit Profile</h2>
          <p className="dashboard-subtext mb-0">Please update your details.</p>
        </div>
      </div>

      <div className="profile-form-grid mt-4">
        <div className="form-field">
          <label>Full Name / Business Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>Service Category</label>
          <input
            type="text"
            value={form.serviceCategory}
            onChange={(e) => updateField("serviceCategory", e.target.value)}
            placeholder="e.g. Electrician, Plumber"
            required
          />
        </div>

        <div className="form-field">
          <label>Experience</label>
          <input
            type="text"
            value={form.experience}
            onChange={(e) => updateField("experience", e.target.value)}
            placeholder="e.g. 5 years"
          />
        </div>

        <div className="form-field form-field-full">
          <label>Address</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
            required
          />
        </div>

        <div className="form-field form-field-full">
          <label>About</label>
          <textarea
            rows={3}
            value={form.about}
            onChange={(e) => updateField("about", e.target.value)}
            placeholder="Write a little about your work..."
          />
        </div>
      </div>

      {/* Documents — sirf Aadhaar / PAN / Passport allowed */}
      <div className="mt-4">
        <label className="d-block mb-2">Identity Documents</label>

        <div className="d-flex flex-column gap-2 mb-2">
          {form.documents.length === 0 && (
            <span className="dashboard-subtext">No document has been uploaded.</span>
          )}
          {form.documents.map((doc, i) => (
            <div key={i} className="doc-row">
              <i className="bi bi-file-earmark-text"></i>
              <span className="flex-grow-1">
                <strong>{doc.type}</strong> — {doc.name}
              </span>
              <button
                type="button"
                className="doc-remove-btn"
                onClick={() => removeDoc(i)}
                aria-label="Remove document"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          ))}
        </div>

        {availableDocTypes.length > 0 ? (
          <div className="doc-upload-row">
            <select
              className="doc-type-select"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
            >
              {availableDocTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <label className="upload-docs-btn">
              <i className="bi bi-upload"></i> Upload {docType}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                onChange={handleDocUpload}
                hidden
              />
            </label>
          </div>
        ) : (
          <p className="dashboard-subtext mb-0">
            All required documents (Aadhaar, PAN, Passport) have been uploaded.
          </p>
        )}

        {docError && <p className="doc-error">{docError}</p>}

        <small className="doc-hint d-block mt-2">
          Only Aadhaar Card, PAN Card, or Passport will be accepted — JPG, PNG, or PDF, max {MAX_DOCUMENT_SIZE_MB}MB, only one of each type.
        </small>
      </div>

      <div className="d-flex gap-2 mt-4">
        <button type="submit" className="btn-accept">
          <i className="bi bi-check-lg"></i> Save Profile
        </button>
        <button type="button" className="btn-action-outline" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}