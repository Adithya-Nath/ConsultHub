import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// NOTE: Assuming the logo file is uploaded and served by a backend, 
// we'll use a placeholder URL for the logo display.

function CompanyProfile() {
  // Define the primary blue color from the theme
  const primaryBlue = "#3b82f6";
  
  // --- Placeholder Data (Imagine this comes from a database/API after registration) ---
  const companyData = {
    name: "Innovatech Solutions Inc.",
    description: "Driving digital transformation with cutting-edge software and cloud services for global enterprises.",
    contactNumber: "+1 (555) 123-4567",
    email: "contact@innovatech.com",
    // Placeholder URL for the uploaded logo
    logoUrl: "https://via.placeholder.com/150/3b82f6/FFFFFF?text=Logo", 
  };
  // -----------------------------------------------------------------------------------

  // Function to handle the Edit Profile button click
  const handleEditProfile = () => {
    alert("Navigating to Edit Profile page! (In a real app, this would route you to an editable form)");
    // In a real application, you'd use a routing library like react-router-dom here
    // e.g., navigate('/edit-company-profile');
  };

  return (
    // Centers the profile card on the screen
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div 
        className="card p-4 p-md-5" 
        style={{ 
          maxWidth: "700px", // Slightly wider for a profile look
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
          Company Profile
        </h2>
        
        {/* Profile Header (Instagram-like structure) */}
        <div className="d-flex align-items-center mb-4 border-bottom pb-4">
          
          {/* Company Logo */}
          <div className="flex-shrink-0 me-4">
            <img 
              src={companyData.logoUrl} 
              alt={`${companyData.name} Logo`} 
              className="img-fluid" 
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%", // Circular logo like Instagram
                objectFit: "cover",
                border: `3px solid ${primaryBlue}` // Subtle border for emphasis
              }}
            />
          </div>
          
          {/* Name and Edit Button */}
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3 className="mb-0" style={{ fontWeight: "600" }}>
                {companyData.name}
              </h3>
              
              {/* Edit Profile Button */}
              <button 
                className="btn btn-sm"
                onClick={handleEditProfile}
                style={{
                  backgroundColor: "white",
                  color: primaryBlue,
                  borderColor: primaryBlue,
                  border: "1px solid",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "5px 15px",
                  transition: "background-color 0.2s"
                }}
              >
                Edit Profile
              </button>
            </div>
            
            {/* Tagline/Short Description (Optional field) */}
            <p className="text-muted mb-0">
              Tech | Software | Cloud Services
            </p>
          </div>
        </div>

        {/* Company Description & Details */}
        <div className="profile-details">
          
          <h5 style={{ color: primaryBlue, marginBottom: "15px" }}>
            About Us
          </h5>
          <p className="lead" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            {companyData.description}
          </p>

          <hr className="my-4" />
          
          {/* Contact Details */}
          <h5 style={{ color: primaryBlue, marginBottom: "15px" }}>
            Contact Information
          </h5>
          <div className="row">
            <div className="col-12 mb-2">
              <strong className="text-muted">Email:</strong> {companyData.email}
            </div>
            <div className="col-12">
              <strong className="text-muted">Phone:</strong> {companyData.contactNumber}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CompanyProfile;