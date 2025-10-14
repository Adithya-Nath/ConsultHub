import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you have installed and imported Bootstrap's CSS

function Register() {
  const [form, setForm] = useState({
    companyName: "",
    companyDescription: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="card-title text-center mb-4">Register Your Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">
              Company Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="companyDescription" className="form-label">
              Company Description:
            </label>
            <textarea
              className="form-control"
              id="companyDescription"
              name="companyDescription"
              value={form.companyDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Company Contact Number:
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Company Email ID:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;