import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [form, setForm] = useState({
    companyName: "",
    companyDescription: "",
    contactNumber: "",
    email: "",
    companyLogo: null, // New state for the logo file
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, companyLogo: e.target.files[0] }); // Store the selected file object
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For file uploads, you'd typically use FormData to send it to a server.
    console.log(form);
    alert("Registration form submitted! Check console for data including logo file.");
    // Example for sending with FormData (uncomment and adapt for your backend)
    /*
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    fetch('/api/register-company', {
      method: 'POST',
      body: formData,
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    */
  };

  const primaryBlue = "#3b82f6";

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
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
            fontWeight: "bold" 
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
          
          <div className="mb-3"> {/* Changed from mb-4 to mb-3 for consistent spacing */}
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

          {/* New field for Company Logo */}
          <div className="mb-4">
            <label htmlFor="companyLogo" className="form-label">
              Company Logo (Optional)
            </label>
            <input
              type="file"
              className="form-control"
              id="companyLogo"
              name="companyLogo"
              accept=".jpg, .jpeg, .png, .gif, .svg, .webp" // Common image formats
              onChange={handleFileChange}
            />
            {form.companyLogo && (
              <small className="form-text text-muted mt-2">
                Selected file: {form.companyLogo.name}
              </small>
            )}
          </div>
          
          <div className="d-grid">
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
                transition: "background-color 0.2s"
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;