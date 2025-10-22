import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleSearch = () => {
        navigate(`/companylist?q=${searchTerm}`);
    };

    useEffect(() => {
        const companies = [
            {
                "id": 1,
                "companyName": "TechNova Inc.",
                "companyDescription": "A cutting-edge technology solutions provider.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1010",
                "companyEmail": "contact@technova.com",
                "companyLogo": "https://via.placeholder.com/100?text=TechNova",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 2,
                "companyName": "GreenLeaf Organics",
                "companyDescription": "Suppliers of organic produce and sustainable goods.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-2020",
                "companyEmail": "info@greenleaf.com",
                "companyLogo": "https://via.placeholder.com/100?text=GreenLeaf",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 3,
                "companyName": "SkyHigh Airlines",
                "companyDescription": "Regional airline connecting small towns.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-3030",
                "companyEmail": "support@skyhigh.com",
                "companyLogo": "https://via.placeholder.com/100?text=SkyHigh",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 4,
                "companyName": "QuantumSoft",
                "companyDescription": "Enterprise software for AI and automation.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-4040",
                "companyEmail": "sales@quantumsoft.com",
                "companyLogo": "https://via.placeholder.com/100?text=QuantumSoft",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 5,
                "companyName": "BrightPath Education",
                "companyDescription": "Online learning platform for skill development.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-5050",
                "companyEmail": "hello@brightpath.edu",
                "companyLogo": "https://via.placeholder.com/100?text=BrightPath",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 6,
                "companyName": "AquaPure Waters",
                "companyDescription": "Eco-friendly water purification systems.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-6060",
                "companyEmail": "contact@aquapure.com",
                "companyLogo": "https://via.placeholder.com/100?text=AquaPure",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 7,
                "companyName": "PixelWorks Media",
                "companyDescription": "Digital marketing and media production agency.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-7070",
                "companyEmail": "media@pixelworks.com",
                "companyLogo": "https://via.placeholder.com/100?text=PixelWorks",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 8,
                "companyName": "BlueFin Capital",
                "companyDescription": "Investment and financial planning services.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-8080",
                "companyEmail": "advisors@bluefincapital.com",
                "companyLogo": "https://via.placeholder.com/100?text=BlueFin",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 9,
                "companyName": "EcoRide Bikes",
                "companyDescription": "Electric bike manufacturing company.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-9090",
                "companyEmail": "ride@ecoride.com",
                "companyLogo": "https://via.placeholder.com/100?text=EcoRide",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 10,
                "companyName": "NovaHealth Labs",
                "companyDescription": "Diagnostic labs and health research services.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1111",
                "companyEmail": "support@novahealthlabs.com",
                "companyLogo": "https://via.placeholder.com/100?text=NovaHealth",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 11,
                "companyName": "CloudNest Solutions",
                "companyDescription": "Cloud computing and storage services.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-1212",
                "companyEmail": "team@cloudnest.io",
                "companyLogo": "https://via.placeholder.com/100?text=CloudNest",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 12,
                "companyName": "UrbanStyle Fashion",
                "companyDescription": "Trendy urban wear and street fashion.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1313",
                "companyEmail": "fashion@urbanstyle.com",
                "companyLogo": "https://via.placeholder.com/100?text=UrbanStyle",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 13,
                "companyName": "ByteForge Games",
                "companyDescription": "Indie game studio creating immersive experiences.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1414",
                "companyEmail": "games@byteforge.io",
                "companyLogo": "https://via.placeholder.com/100?text=ByteForge",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 14,
                "companyName": "FreshCart Grocery",
                "companyDescription": "Online grocery delivery with local produce.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-1515",
                "companyEmail": "support@freshcart.com",
                "companyLogo": "https://via.placeholder.com/100?text=FreshCart",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 15,
                "companyName": "SmartNest Homes",
                "companyDescription": "Smart home devices and automation systems.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1616",
                "companyEmail": "sales@smartnest.com",
                "companyLogo": "https://via.placeholder.com/100?text=SmartNest",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 16,
                "companyName": "NextWave Consulting",
                "companyDescription": "Business strategy and digital transformation consulting.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-1717",
                "companyEmail": "consult@nextwave.com",
                "companyLogo": "https://via.placeholder.com/100?text=NextWave",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 17,
                "companyName": "CivicGrid Solutions",
                "companyDescription": "Smart city infrastructure and IoT services.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-1818",
                "companyEmail": "info@civicgrid.io",
                "companyLogo": "https://via.placeholder.com/100?text=CivicGrid",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 18,
                "companyName": "Zeno Robotics",
                "companyDescription": "Industrial robotics and automation equipment.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-1919",
                "companyEmail": "hello@zenorobotics.com",
                "companyLogo": "https://via.placeholder.com/100?text=Zeno",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 19,
                "companyName": "SolarBloom Energy",
                "companyDescription": "Residential and commercial solar energy solutions.",
                "companyStatus": "approved",
                "companyPhone": "+1-800-555-2121",
                "companyEmail": "solar@solarbloom.com",
                "companyLogo": "https://via.placeholder.com/100?text=SolarBloom",
                "companyRating": 4.5,
                "companyReviews": 122
            },
            {
                "id": 20,
                "companyName": "FleetFox Logistics",
                "companyDescription": "Logistics and fleet management solutions.",
                "companyStatus": "pending",
                "companyPhone": "+1-800-555-2222",
                "companyEmail": "logistics@fleetfox.com",
                "companyLogo": "https://via.placeholder.com/100?text=FleetFox",
                "companyRating": 4.5,
                "companyReviews": 122
            }
        ]
            ;
        localStorage.setItem("companies", JSON.stringify(companies));
    }, []);

    return (
        <div>
            <div
                className="d-flex justify-content-end align-items-center p-3"
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '30px',
                    gap: '20px',
                    zIndex: 10,
                }}
            >
                {user ? (
                    <>
                        <div className="text-end me-2">
                            <div style={{ fontWeight: 600 }}>{user.name}</div>
                            <div style={{ fontSize: '0.85rem' }}>{user.email}</div>

                        </div>
                        <button className="btn btn-outline-danger" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                )}
            </div>
            <div className="container-fluid bg-light text-dark p-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold text-primary">Welcome to ConsultHub</h1>
                    <p className="lead my-4">
                        ConsultHub is a comprehensive online platform that connects users with a wide array of consulting companies. Search, compare, and make informed decisions based on detailed profiles and authentic peer reviews.
                    </p>
                    <div className="input-group w-75 mx-auto">
                        <input type="search" placeholder="Search by service, company name, or keyword" className="form-control" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            <div className="container my-5">

                <section className="how-it-works mb-5">
                    <h2 className="text-center display-6 fw-bold mb-4">A Streamlined Process for Finding Experts and Growing Your Business</h2>
                    <div className="row g-4">

                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">For Clients Seeking Services</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Search & Filter:</strong> Easily search for companies by service type, name, or keywords and filter results by rating, location, and more.</li>
                                        <li className="list-group-item"><strong>Compare & Evaluate:</strong> Browse company cards and click to view detailed profiles, services, and contact details. Read user reviews and ratings to make an informed choice.</li>
                                        <li className="list-group-item"><strong>Connect & Hire:</strong> Once you've found the right fit, use the provided contact details to connect with the company and confidently start your project.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">For Consulting Companies</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Register Your Firm:</strong> Apply to list your company by completing a registration form and paying a fee through our secure payment gateway.</li>
                                        <li className="list-group-item"><strong>Get Approved:</strong> Our admin team will review your application. You can view your application status (Pending, Approved, or Rejected) and receive status notifications.</li>
                                        <li className="list-group-item"><strong>Build Your Presence:</strong> Once approved, log in to your dashboard to manage your profile, edit details, add or remove services, and view all user ratings and reviews.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-section text-center mb-5">
                    <h2 className="display-6 fw-bold mb-4">See ConsultHub in Action</h2>
                    <div className="col-lg-8 mx-auto">
                        <div className="ratio ratio-16x9">
                            <video src="/Consulthub_Finding_Your_Ideal_Company.mp4" title="ConsultHub in action" controls autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                <section className="why-join text-center bg-light p-5 rounded">
                    <h2 className="display-6 fw-bold mb-4">Why Join ConsultHub?</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h5>For Clients</h5>
                            <p>ConsultHub empowers you to confidently choose the right company for your needs. We streamline the process of finding and evaluating consulting services through a centralized directory with detailed profiles and authentic user feedback.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>For Consulting Firms</h5>
                            <p>Expand your reach and build a reputable online presence. Our platform offers a valuable channel for marketing your services, ultimately fostering a trustworthy and dynamic digital marketplace.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="card-title">The Company Consulting Platform</h5>
                    <p className="card-text">ConsultHub is an online platform designed to connect users with a wide array of consulting companies. It streamlines the process of finding and evaluating consulting services by providing a centralized directory with detailed company profiles and authentic user feedback. The platform aims to create a transparent and efficient marketplace for clients and consulting firms alike, fostering a trustworthy and dynamic digital community.</p>
                    <a href="#" className="btn btn-primary">Find Companies</a>
                </div>
                <div className="card-footer text-body-secondary p-3 mb-2 bg-dark-subtle text-dark-emphasis">
                    @ConsultHub2025
                </div>
            </div>
        </div>
    );
}

export default Homepage;
