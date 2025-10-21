
const companyData = {
    handle: "innovatech_solutions",
    name: "Innovatech Solutions Inc.",
    contactNumber: "+1 (555) 123-4567",
    email: "contact@innovatech.com",
    postsCount: 47,
    followersCount: 197,
    followingCount: 213,
    tagline: "Innovating for a Smarter Future",
    bio: "Driving digital transformation with cutting-edge software and cloud services for global enterprises, specializing in AI, cloud infrastructure, and cybersecurity solutions.",
    website: "https://www.innovatech.com",
    logoUrl: "https://via.placeholder.com/150/3b82f6/FFFFFF?text=IS",
    services: [
        "Cloud Infrastructure Migration & Management",
        "Artificial Intelligence (AI) Development",
        "Enterprise Cybersecurity Solutions",
        "Custom Software Engineering",
        "Managed IT Services"
    ],
    reviews: [
        { id: 1, rating: 5 },
        { id: 2, rating: 4 },
        { id: 3, rating: 5 },
        { id: 4, rating: 5 },
    ],
    postImages: [
        { id: 1, url: "https://via.placeholder.com/300/e0f2fe/1e40af?text=AI+Solutions" },
        { id: 2, url: "https://via.placeholder.com/300/bfdbfe/1e40af?text=Cloud+Platform" },
        { id: 3, url: "https://via.placeholder.com/300/93c5fd/1e40af?text=Cyber+Security" },
        { id: 4, url: "https://via.placeholder.com/300/60a5fa/1e40af?text=New+Product" },
        { id: 5, url: "https://via.placeholder.com/300/3b82f6/FFFFFF?text=Team+Event" },
        { id: 6, url: "https://via.placeholder.com/300/1d4ed8/FFFFFF?text=Case+Study" },
    ],
};

function CompanyProfile() {
    
    const handleEditProfile = () => {
        console.log("Navigating to Edit Profile page!");
    };

    const handleContactUs = () => {
        console.log("Navigating to Contact Us page!");
    };

    const avgRating = (companyData.reviews.reduce((acc, r) => acc + r.rating, 0) / companyData.reviews.length).toFixed(1);
    const displayHandle = companyData.handle.replace(/_/g, ' ');

    return (
       
        <div className="bg-white border rounded-3 shadow-lg mb-5 overflow-hidden">
            
          
            <div className="p-4 border-bottom">
             
                <div className="d-flex align-items-start">
                    
              
                    <div className="flex-shrink-0 pe-4 pe-md-5" style={{ width: '7rem', height: '7rem' }}>
                        <img 
                            src={companyData.logoUrl} 
                            alt={`${companyData.name} Logo`} 
                            className="w-100 h-100 rounded-circle object-fit-cover border border-primary border-2"
                        />
                    </div>
                    
                 
                    <div className="flex-grow-1">
                        
                       
                        <div className="d-flex align-items-center mb-3">
                            <h2 className="h4 fw-light me-3">{displayHandle}</h2>
                          
                            <button 
                                id="edit-profile-btn" 
                                className="btn btn-light text-primary btn-sm fw-semibold rounded-3 me-2"
                                onClick={handleEditProfile}
                            >
                                Edit Profile
                            </button>
                            <button 
                                id="contact-us-btn" 
                                className="btn btn-light text-primary btn-sm fw-semibold rounded-3"
                                onClick={handleContactUs}
                            >
                                Contact Us
                            </button>
                        </div>

                        <div className="d-flex justify-content-between mb-3 w-75">
                           
                        </div>

                        <p className="fw-bold mb-0">{companyData.name}</p>
                        <p className="mb-0">{companyData.tagline}</p>
                        <p className="text-muted mb-1"><small>{companyData.bio}</small></p>
                        <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
                           <small>{companyData.website}</small>
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-4 border-bottom">
                <h5 className="h5 fw-semibold text-primary mb-3">Services Provided 🛠️</h5>
                <div className="d-flex flex-wrap gap-2">
                    {companyData.services.map((service) => (
                        <span 
                            key={service}
                            
                            className="fs-6 fw-medium px-3 py-2 rounded-pill bg-primary-subtle text-primary shadow-sm"
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-4 border-bottom">
                <h5 className="h5 fw-semibold text-primary mb-3">User Ratings 🌟 (Avg: {avgRating} / 5.0)</h5>
                <div className="row g-3">
                    {companyData.reviews.map((review) => (
                        <div key={review.id} className="col-6 col-md-3">
                       
                            <div className="text-center p-3 rounded-3 bg-light border d-flex justify-content-center align-items-center h-100">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* 4. Content Grid (Posts) */}
            {/* py-2, px-4 (px-6), border-bottom */}
            <div className="py-2 px-4 border-bottom">
                <h5 className="h5 fw-semibold text-dark">Content Posts</h5>
            </div>
            {/* Replaced CSS Grid with Bootstrap Grid: row, g-1 (gap-0.5), bg-light */}
            <div className="row g-1 bg-light">
                {companyData.postImages.map((post) => (
                    <div key={post.id} className="col-4">
                        <div className="ratio ratio-1x1">
                            <img 
                                src={post.url} 
                                alt={`Post ${post.id}`} 
                                className="object-fit-cover" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyProfile;