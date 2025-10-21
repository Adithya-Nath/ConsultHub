import React from 'react';

// --- Original Company Data ---
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

// --- Reusable StarRating Component (replaces JS function) ---
// function StarRating({ rating }) {
//     return (
//         <div className="d-inline-block">
//             {[...Array(5)].map((_, index) => {
//                 const starValue = index + 1;
//                 return (
//                     <i
//                         key={index}
//                         // Use text-warning for yellow, bi-star-fill for full, bi-star for empty
//                         className={`bi ${starValue <= rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'} me-1`}
//                     ></i>
//                 );
//             })}
//         </div>
//     );
// }

// --- Reusable ProfileStat Component (replaces JS function) ---
// function ProfileStat({ count, label }) {
//     return (
//         <div className="text-center lh-tight">
//             {/* fs-5 for text-lg, fw-semibold for font-semibold, d-block for block */}
//             <strong className="fs-5 fw-semibold d-block">{count}</strong>
//             {/* small tag for text-sm, text-muted for text-gray-500 */}
//             <small className="text-muted">{label}</small>
//         </div>
//     );
// }

// --- Main CompanyProfile Component ---
function CompanyProfile() {
    
    // --- Event Handlers (from original script) ---
    const handleEditProfile = () => {
        console.log("Navigating to Edit Profile page!");
    };

    const handleContactUs = () => {
        console.log("Navigating to Contact Us page!");
    };

    // --- Calculated Values (from original renderProfile) ---
    const avgRating = (companyData.reviews.reduce((acc, r) => acc + r.rating, 0) / companyData.reviews.length).toFixed(1);
    const displayHandle = companyData.handle.replace(/_/g, ' ');

    return (
        // Main Container: Replaces Tailwind with Bootstrap classes
        // bg-white, border, rounded-3 (lg), shadow-lg (xl), mb-5, overflow-hidden
        <div className="bg-white border rounded-3 shadow-lg mb-5 overflow-hidden">
            
            {/* 1. Profile Header */}
            {/* p-4 (p-6), border-bottom */}
            <div className="p-4 border-bottom">
                {/* d-flex, align-items-start */}
                <div className="d-flex align-items-start">
                    
                    {/* Logo */}
                    {/* flex-shrink-0, pe-md-5 (pr-10), custom width/height */}
                    <div className="flex-shrink-0 pe-4 pe-md-5" style={{ width: '7rem', height: '7rem' }}>
                        <img 
                            src={companyData.logoUrl} 
                            alt={`${companyData.name} Logo`} 
                            // w-100, h-100, rounded-circle (full), object-fit-cover, border, border-primary, border-2
                            className="w-100 h-100 rounded-circle object-fit-cover border border-primary border-2"
                        />
                    </div>
                    
                    {/* Handle, Stats, and Bio */}
                    {/* flex-grow-1 */}
                    <div className="flex-grow-1">
                        
                        {/* Handle and Buttons */}
                        {/* d-flex, align-items-center, mb-3 (mb-4) */}
                        <div className="d-flex align-items-center mb-3">
                            {/* h4 (2xl), fw-light, me-3 (mr-4) */}
                            <h2 className="h4 fw-light me-3">{displayHandle}</h2>
                            {/* btn, btn-sm, fw-semibold, rounded-3 (lg), me-2 (mr-2) */}
                            {/* btn-light & text-primary replaces custom light blue bg/text */}
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

                        {/* Stats Bar */}
                        {/* d-flex, justify-content-between, mb-3 (mb-4), w-75 (3/4) */}
                        <div className="d-flex justify-content-between mb-3 w-75">
                            {/* <ProfileStat count={companyData.postsCount} label="posts" />
                            <ProfileStat count={companyData.followersCount} label="customers" />
                            <ProfileStat count={companyData.followingCount} label="partners" /> */}
                        </div>

                        {/* Company Name and Bio */}
                        <p className="fw-bold mb-0">{companyData.name}</p>
                        <p className="mb-0">{companyData.tagline}</p>
                        {/* small tag (text-sm), text-muted (gray-700) */}
                        <p className="text-muted mb-1"><small>{companyData.bio}</small></p>
                        {/* text-primary (blue-500), text-decoration-none */}
                        <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
                           <small>{companyData.website}</small>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Services Provided */}
            <div className="p-4 border-bottom">
                {/* h5 (lg), fw-semibold, text-primary, mb-3 */}
                <h5 className="h5 fw-semibold text-primary mb-3">Services Provided 🛠️</h5>
                {/* d-flex, flex-wrap, gap-2 */}
                <div className="d-flex flex-wrap gap-2">
                    {companyData.services.map((service) => (
                        <span 
                            key={service}
                            // fs-6 (sm), fw-medium, px-3 py-2 (px-4 py-2), rounded-pill (full)
                            // bg-primary-subtle & text-primary replaces custom light blue
                            // shadow-sm
                            className="fs-6 fw-medium px-3 py-2 rounded-pill bg-primary-subtle text-primary shadow-sm"
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </div>

            {/* 3. User Ratings */}
            <div className="p-4 border-bottom">
                <h5 className="h5 fw-semibold text-primary mb-3">User Ratings 🌟 (Avg: {avgRating} / 5.0)</h5>
                {/* Replaced CSS Grid with Bootstrap Grid: row, g-3 (gap-4) */}
                <div className="row g-3">
                    {companyData.reviews.map((review) => (
                        // col-6 (cols-2), col-md-3 (md:cols-4)
                        <div key={review.id} className="col-6 col-md-3">
                            {/* text-center, p-3 (p-4), rounded-3 (xl), bg-light, border */}
                            {/* d-flex, justify-content-center, align-items-center, h-100 */}
                            <div className="text-center p-3 rounded-3 bg-light border d-flex justify-content-center align-items-center h-100">
                                {/* <StarRating rating={review.rating} /> */}
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
                    // col-4 (cols-3)
                    <div key={post.id} className="col-4">
                        {/* Use Bootstrap's ratio helper for 1:1 aspect ratio */}
                        <div className="ratio ratio-1x1">
                            <img 
                                src={post.url} 
                                alt={`Post ${post.id}`} 
                                // object-fit-cover is a Bootstrap class
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