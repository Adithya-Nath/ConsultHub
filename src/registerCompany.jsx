import React, { useState } from "react";
// 1. Import useNavigate instead of Link
import { useNavigate } from "react-router-dom";

function RegisterCompany() {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "",
    companyDescription: "",
    email: "",
    contactNumber: "",
    companyLogo: null,
  });
  // Add state to manage validation errors for a better user experience
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, companyLogo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors on a new submission

    // 3. Add validation logic here
    const { companyName, companyDescription, email, contactNumber } = form;
    if (!companyName || !companyDescription || !email || !contactNumber) {
      // If any required field is empty, set an error and stop.
      setError("Please fill out all required fields before proceeding.");
      return; // Stop the function from running further
    }

    // 4. If validation passes, log the data and then navigate
    console.log("Form data is valid:", form);
    navigate("/payment-page");
  };

  const primaryBlue = "#3b82f6";

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <h2
          className="card-title text-center mb-4"
          style={{
            color: primaryBlue,
            fontWeight: "bold",
          }}
        >
          Register Your Company
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="companyDescription" className="form-label">
              Company Description
            </label>
            <textarea
              className="form-control"
              id="companyDescription"
              name="companyDescription"
              placeholder="Describe your company"
              value={form.companyDescription}
              onChange={handleChange}
              rows="3"
              required
              style={{ resize: "none" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Company Email ID
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter company email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Company Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter contact number"
              value={form.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyLogo" className="form-label">
              Company Logo (Optional)
            </label>
            <input
              type="file"
              className="form-control"
              id="companyLogo"
              name="companyLogo"
              accept=".jpg, .jpeg, .png, .gif, .svg, .webp"
              onChange={handleFileChange}
            />
            {form.companyLogo && (
              <small className="form-text text-muted mt-2">
                Selected file: {form.companyLogo.name}
              </small>
            )}
          </div>

          {/* Display validation error message here */}
          {error && <div className="alert alert-danger p-2 mb-3">{error}</div>}

          <div className="d-grid">
            {/* 5. Change the Link back to a button with type="submit" */}
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: primaryBlue,
                borderColor: primaryBlue,
                color: "white",
                padding: "10px 0",
                fontSize: "1.1rem",
                borderRadius: "8px",
                transition: "background-color 0.2s",
              }}
            >
              Register and Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCompany;
