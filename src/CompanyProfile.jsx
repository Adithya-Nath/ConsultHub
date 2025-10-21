import React, { useState } from 'react';

// Initial data for the profile, used to set the initial state.
const initialCompanyData = {
    handle: "innovatech_solutions",
    name: "Innovatech Solutions Inc.",
    tagline: "Innovating for a Smarter Future",
    bio: "Driving digital transformation with cutting-edge software and cloud services for global enterprises, specializing in AI, cloud infrastructure, and cybersecurity solutions.",
    website: "https://www.innovatech.com",
    email: "contact@innovatech.com",
    logoIcon: "bi-buildings-fill", // Using a Bootstrap icon class as the default
    logoUrl: null, // This will hold the URL of an uploaded image
    services: [
        "Cloud Infrastructure Migration & Management",
        "Artificial Intelligence (AI) Development",
        "Enterprise Cybersecurity Solutions",
        "Custom Software Engineering",
        "Managed IT Services"
    ],
    postImages: [
        { id: 1, url: "https://placehold.co/400x400/e0f2fe/1e40af?text=AI+Solutions" },
        { id: 2, url: "https://placehold.co/400x400/bfdbfe/1e40af?text=Cloud+Platform" },
        { id: 3, url: "https://placehold.co/400x400/93c5fd/1e40af?text=Cyber+Security" },
        { id: 4, url: "https://placehold.co/400x400/60a5fa/1e40af?text=New+Product" },
        { id: 5, url: "https://placehold.co/400x400/3b82f6/FFFFFF?text=Team+Event" },
        { id: 6, url: "https://placehold.co/400x400/1d4ed8/FFFFFF?text=Case+Study" },
    ],
};

function CompanyProfile() {
    // State to hold the profile data, making it editable
    const [profileData, setProfileData] = useState(initialCompanyData);
    // State to toggle between view and edit modes
    const [isEditing, setIsEditing] = useState(false);
    // State for the temporary logo preview URL
    const [logoPreview, setLogoPreview] = useState(null);

    // --- Event Handlers ---

    // Generic handler for text inputs and textareas
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({ ...prevData, [name]: value }));
    };

    // Handler for the file input (logo)
    const handleLogoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Create a temporary URL for the selected image to show a preview
            const previewUrl = URL.createObjectURL(file);
            setLogoPreview(previewUrl);
            // In a real app, you would prepare the 'file' object for upload
        }
    };
    
    // Handlers for managing the services list
    const handleServiceChange = (index, value) => {
        const updatedServices = [...profileData.services];
        updatedServices[index] = value;
        setProfileData(prevData => ({ ...prevData, services: updatedServices }));
    };

    const handleAddService = () => {
        setProfileData(prevData => ({
            ...prevData,
            services: [...prevData.services, ""]
        }));
    };

    const handleRemoveService = (index) => {
        const filteredServices = profileData.services.filter((_, i) => i !== index);
        setProfileData(prevData => ({ ...prevData, services: filteredServices }));
    };

    // --- Mode Toggling Handlers ---

    const handleSave = () => {
        // In a real application, you would send the updated profileData to your server here.
        // For this example, we just update the logoUrl if a new one was previewed.
        if (logoPreview) {
             setProfileData(prevData => ({ ...prevData, logoUrl: logoPreview, logoIcon: null }));
        }
        setIsEditing(false); // Switch back to view mode
        console.log("Profile Saved:", profileData);
    };

    const handleCancel = () => {
        // Discard changes by resetting the state to the initial data
        setProfileData(initialCompanyData);
        setLogoPreview(null);
        setIsEditing(false);
    };

    return (
        <div className="container my-5">
            <div className="bg-light border-0 rounded-4 shadow-sm">
                
                {/* --- HEADER SECTION: LOGO, NAME, BIO, BUTTONS --- */}
                <div className="p-4 p-md-5 border-bottom">
                    <div className="d-flex flex-column flex-md-row align-items-center">
                        
                        {/* Logo/Icon */}
                        <div className="text-center me-md-4 mb-3 mb-md-0 flex-shrink-0">
                           {logoPreview || profileData.logoUrl ? (
                                <img 
                                    src={logoPreview || profileData.logoUrl} 
                                    alt="Company Logo"
                                    className="rounded-circle bg-white border border-primary border-3"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                />
                           ) : (
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '120px', height: '120px' }}>
                                <i className={`${profileData.logoIcon} display-4`}></i>
                            </div>
                           )}
                           {isEditing && (
                                <div className="mt-2">
                                    <label htmlFor="logoUpload" className="btn btn-sm btn-outline-primary">
                                        Change Logo
                                    </label>
                                    <input type="file" id="logoUpload" accept="image/*" onChange={handleLogoChange} className="d-none" />
                                </div>
                           )}
                        </div>

                        {/* Main Info */}
                        <div className="flex-grow-1 text-center text-md-start">
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-2">
                                <h2 className="h3 fw-light me-md-3 mb-2 mb-md-0">{profileData.handle}</h2>
                                {isEditing ? (
                                    <div className="d-flex gap-2">
                                        <button onClick={handleSave} className="btn btn-primary btn-sm px-3">Save</button>
                                        <button onClick={handleCancel} className="btn btn-secondary btn-sm px-3">Cancel</button>
                                    </div>
                                ) : (
                                    <div className="d-flex gap-2">
                                        <button onClick={() => setIsEditing(true)} className="btn btn-outline-primary btn-sm px-3">Edit Profile</button>
                                    </div>
                                )}
                            </div>
                            
                            {isEditing ? (
                                <>
                                    <input type="text" name="name" value={profileData.name} onChange={handleChange} className="form-control form-control-sm mb-1 fw-bold" placeholder="Company Name"/>
                                    <input type="text" name="tagline" value={profileData.tagline} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Tagline"/>
                                    <textarea name="bio" value={profileData.bio} onChange={handleChange} className="form-control form-control-sm mb-2" rows="3" placeholder="Company Bio"></textarea>
                                </>
                            ) : (
                                <>
                                    <p className="fw-bold mb-0 fs-5">{profileData.name}</p>
                                    <p className="text-muted mb-1">{profileData.tagline}</p>
                                    <p className="mb-2">{profileData.bio}</p>
                                </>
                            )}
                            <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                                <i className="bi bi-link-45deg"></i> {profileData.website}
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- SERVICES SECTION --- */}
                <div className="p-4 p-md-5 border-bottom">
                    <h5 className="mb-3 fw-semibold">Services Provided</h5>
                    {isEditing ? (
                        <div className="d-flex flex-column gap-2">
                            {profileData.services.map((service, index) => (
                                <div key={index} className="input-group">
                                    <input type="text" className="form-control form-control-sm" value={service} onChange={(e) => handleServiceChange(index, e.target.value)} />
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveService(index)}><i className="bi bi-trash"></i></button>
                                </div>
                            ))}
                            <button className="btn btn-success btn-sm mt-2" onClick={handleAddService}><i className="bi bi-plus-lg"></i> Add Service</button>
                        </div>
                    ) : (
                        <div className="d-flex flex-wrap gap-2">
                            {profileData.services.map((service, index) => (
                                <span key={index} className="badge fw-medium text-bg-primary bg-opacity-10 text-primary-emphasis rounded-pill px-3 py-2">
                                    {service}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* --- POSTS GRID --- */}
                <div className="p-4 p-md-5">
                     <h5 className="mb-3 fw-semibold">Gallery</h5>
                     <div className="row g-2">
                        {profileData.postImages.map(img => (
                            <div key={img.id} className="col-4">
                                <img src={img.url} alt={`Post ${img.id}`} className="img-fluid rounded-3" style={{aspectRatio: '1/1', objectFit: 'cover'}}/>
                            </div>
                        ))}
                     </div>
                </div>

            </div>
        </div>
    );
}

export default CompanyProfile;

